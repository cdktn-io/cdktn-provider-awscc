# `apigatewayUsagePlan` Submodule <a name="`apigatewayUsagePlan` Submodule" id="@cdktn/provider-awscc.apigatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayUsagePlan <a name="ApigatewayUsagePlan" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan awscc_apigateway_usage_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

new apigatewayUsagePlan.ApigatewayUsagePlan(scope: Construct, id: string, config?: ApigatewayUsagePlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig">ApigatewayUsagePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig">ApigatewayUsagePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages">putApiStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle">putThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetApiStages">resetApiStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetThrottle">resetThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetUsagePlanName">resetUsagePlanName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiStages` <a name="putApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages"></a>

```typescript
public putApiStages(value: IResolvable | ApigatewayUsagePlanApiStages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]

---

##### `putQuota` <a name="putQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota"></a>

```typescript
public putQuota(value: ApigatewayUsagePlanQuota): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags"></a>

```typescript
public putTags(value: IResolvable | ApigatewayUsagePlanTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]

---

##### `putThrottle` <a name="putThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle"></a>

```typescript
public putThrottle(value: ApigatewayUsagePlanThrottle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

---

##### `resetApiStages` <a name="resetApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetApiStages"></a>

```typescript
public resetApiStages(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetQuota"></a>

```typescript
public resetQuota(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThrottle` <a name="resetThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetThrottle"></a>

```typescript
public resetThrottle(): void
```

##### `resetUsagePlanName` <a name="resetUsagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetUsagePlanName"></a>

```typescript
public resetUsagePlanName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayUsagePlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigatewayUsagePlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayUsagePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayUsagePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayUsagePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStages">apiStages</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList">ApigatewayUsagePlanApiStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quota">quota</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference">ApigatewayUsagePlanQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList">ApigatewayUsagePlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttle">throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference">ApigatewayUsagePlanThrottleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanId">usagePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStagesInput">apiStagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quotaInput">quotaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttleInput">throttleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanNameInput">usagePlanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanName">usagePlanName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiStages`<sup>Required</sup> <a name="apiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStages"></a>

```typescript
public readonly apiStages: ApigatewayUsagePlanApiStagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList">ApigatewayUsagePlanApiStagesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quota"></a>

```typescript
public readonly quota: ApigatewayUsagePlanQuotaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference">ApigatewayUsagePlanQuotaOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tags"></a>

```typescript
public readonly tags: ApigatewayUsagePlanTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList">ApigatewayUsagePlanTagsList</a>

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttle"></a>

```typescript
public readonly throttle: ApigatewayUsagePlanThrottleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference">ApigatewayUsagePlanThrottleOutputReference</a>

---

##### `usagePlanId`<sup>Required</sup> <a name="usagePlanId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanId"></a>

```typescript
public readonly usagePlanId: string;
```

- *Type:* string

---

##### `apiStagesInput`<sup>Optional</sup> <a name="apiStagesInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStagesInput"></a>

```typescript
public readonly apiStagesInput: IResolvable | ApigatewayUsagePlanApiStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quotaInput"></a>

```typescript
public readonly quotaInput: IResolvable | ApigatewayUsagePlanQuota;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApigatewayUsagePlanTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]

---

##### `throttleInput`<sup>Optional</sup> <a name="throttleInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttleInput"></a>

```typescript
public readonly throttleInput: IResolvable | ApigatewayUsagePlanThrottle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

---

##### `usagePlanNameInput`<sup>Optional</sup> <a name="usagePlanNameInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanNameInput"></a>

```typescript
public readonly usagePlanNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `usagePlanName`<sup>Required</sup> <a name="usagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanName"></a>

```typescript
public readonly usagePlanName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayUsagePlanApiStages <a name="ApigatewayUsagePlanApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

const apigatewayUsagePlanApiStages: apigatewayUsagePlan.ApigatewayUsagePlanApiStages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#api_id ApigatewayUsagePlan#api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.stage">stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#stage ApigatewayUsagePlan#stage}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.throttle">throttle</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}. |

---

##### `apiId`<sup>Optional</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#api_id ApigatewayUsagePlan#api_id}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#stage ApigatewayUsagePlan#stage}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.throttle"></a>

```typescript
public readonly throttle: IResolvable | {[ key: string ]: ApigatewayUsagePlanApiStagesThrottle};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}.

---

### ApigatewayUsagePlanApiStagesThrottle <a name="ApigatewayUsagePlanApiStagesThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

const apigatewayUsagePlanApiStagesThrottle: apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.burstLimit">burstLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.rateLimit">rateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}. |

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}.

---

### ApigatewayUsagePlanConfig <a name="ApigatewayUsagePlanConfig" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

const apigatewayUsagePlanConfig: apigatewayUsagePlan.ApigatewayUsagePlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.apiStages">apiStages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#api_stages ApigatewayUsagePlan#api_stages}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.quota">quota</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a></code> | ``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.  In some cases clients can exceed the targets that you set. Don?t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#tags ApigatewayUsagePlan#tags}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.throttle">throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a></code> | ``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.usagePlanName">usagePlanName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#usage_plan_name ApigatewayUsagePlan#usage_plan_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiStages`<sup>Optional</sup> <a name="apiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.apiStages"></a>

```typescript
public readonly apiStages: IResolvable | ApigatewayUsagePlanApiStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#api_stages ApigatewayUsagePlan#api_stages}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.quota"></a>

```typescript
public readonly quota: ApigatewayUsagePlanQuota;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.  In some cases clients can exceed the targets that you set. Don?t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#quota ApigatewayUsagePlan#quota}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApigatewayUsagePlanTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#tags ApigatewayUsagePlan#tags}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.throttle"></a>

```typescript
public readonly throttle: ApigatewayUsagePlanThrottle;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}

---

##### `usagePlanName`<sup>Optional</sup> <a name="usagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.usagePlanName"></a>

```typescript
public readonly usagePlanName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#usage_plan_name ApigatewayUsagePlan#usage_plan_name}.

---

### ApigatewayUsagePlanQuota <a name="ApigatewayUsagePlanQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

const apigatewayUsagePlanQuota: apigatewayUsagePlan.ApigatewayUsagePlanQuota = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.limit">limit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#limit ApigatewayUsagePlan#limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.offset">offset</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#offset ApigatewayUsagePlan#offset}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.period">period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#period ApigatewayUsagePlan#period}. |

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#limit ApigatewayUsagePlan#limit}.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#offset ApigatewayUsagePlan#offset}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#period ApigatewayUsagePlan#period}.

---

### ApigatewayUsagePlanTags <a name="ApigatewayUsagePlanTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

const apigatewayUsagePlanTags: apigatewayUsagePlan.ApigatewayUsagePlanTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.key">key</a></code> | <code>string</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.value">value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#key ApigatewayUsagePlan#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#value ApigatewayUsagePlan#value}

---

### ApigatewayUsagePlanThrottle <a name="ApigatewayUsagePlanThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

const apigatewayUsagePlanThrottle: apigatewayUsagePlan.ApigatewayUsagePlanThrottle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.burstLimit">burstLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.rateLimit">rateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}. |

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayUsagePlanApiStagesList <a name="ApigatewayUsagePlanApiStagesList" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

new apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get"></a>

```typescript
public get(index: number): ApigatewayUsagePlanApiStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayUsagePlanApiStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]

---


### ApigatewayUsagePlanApiStagesOutputReference <a name="ApigatewayUsagePlanApiStagesOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

new apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle">putThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetApiId">resetApiId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetStage">resetStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetThrottle">resetThrottle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putThrottle` <a name="putThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle"></a>

```typescript
public putThrottle(value: IResolvable | {[ key: string ]: ApigatewayUsagePlanApiStagesThrottle}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>}

---

##### `resetApiId` <a name="resetApiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetApiId"></a>

```typescript
public resetApiId(): void
```

##### `resetStage` <a name="resetStage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetStage"></a>

```typescript
public resetStage(): void
```

##### `resetThrottle` <a name="resetThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetThrottle"></a>

```typescript
public resetThrottle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttle">throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap">ApigatewayUsagePlanApiStagesThrottleMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttleInput">throttleInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttle"></a>

```typescript
public readonly throttle: ApigatewayUsagePlanApiStagesThrottleMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap">ApigatewayUsagePlanApiStagesThrottleMap</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `throttleInput`<sup>Optional</sup> <a name="throttleInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttleInput"></a>

```typescript
public readonly throttleInput: IResolvable | {[ key: string ]: ApigatewayUsagePlanApiStagesThrottle};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>}

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayUsagePlanApiStages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>

---


### ApigatewayUsagePlanApiStagesThrottleMap <a name="ApigatewayUsagePlanApiStagesThrottleMap" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

new apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get"></a>

```typescript
public get(key: string): ApigatewayUsagePlanApiStagesThrottleOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: ApigatewayUsagePlanApiStagesThrottle};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>}

---


### ApigatewayUsagePlanApiStagesThrottleOutputReference <a name="ApigatewayUsagePlanApiStagesThrottleOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

new apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit">resetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit"></a>

```typescript
public resetBurstLimit(): void
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit"></a>

```typescript
public resetRateLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput">burstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit">burstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput"></a>

```typescript
public readonly burstLimitInput: number;
```

- *Type:* number

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: number;
```

- *Type:* number

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayUsagePlanApiStagesThrottle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>

---


### ApigatewayUsagePlanQuotaOutputReference <a name="ApigatewayUsagePlanQuotaOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

new apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayUsagePlanQuota;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

---


### ApigatewayUsagePlanTagsList <a name="ApigatewayUsagePlanTagsList" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

new apigatewayUsagePlan.ApigatewayUsagePlanTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get"></a>

```typescript
public get(index: number): ApigatewayUsagePlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayUsagePlanTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]

---


### ApigatewayUsagePlanTagsOutputReference <a name="ApigatewayUsagePlanTagsOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

new apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayUsagePlanTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>

---


### ApigatewayUsagePlanThrottleOutputReference <a name="ApigatewayUsagePlanThrottleOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer"></a>

```typescript
import { apigatewayUsagePlan } from '@cdktn/provider-awscc'

new apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetBurstLimit">resetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetBurstLimit"></a>

```typescript
public resetBurstLimit(): void
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetRateLimit"></a>

```typescript
public resetRateLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimitInput">burstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimit">burstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimitInput"></a>

```typescript
public readonly burstLimitInput: number;
```

- *Type:* number

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: number;
```

- *Type:* number

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayUsagePlanThrottle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

---



