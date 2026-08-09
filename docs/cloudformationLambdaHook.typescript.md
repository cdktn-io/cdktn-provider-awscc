# `cloudformationLambdaHook` Submodule <a name="`cloudformationLambdaHook` Submodule" id="@cdktn/provider-awscc.cloudformationLambdaHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationLambdaHook <a name="CloudformationLambdaHook" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

new cloudformationLambdaHook.CloudformationLambdaHook(scope: Construct, id: string, config: CloudformationLambdaHookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig">CloudformationLambdaHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig">CloudformationLambdaHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putStackFilters">putStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters">putTargetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetAutoUpdate">resetAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetHookStatus">resetHookStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetStackFilters">resetStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetTargetFilters">resetTargetFilters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: CloudformationLambdaHookLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

---

##### `putStackFilters` <a name="putStackFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putStackFilters"></a>

```typescript
public putStackFilters(value: CloudformationLambdaHookStackFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putStackFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

---

##### `putTargetFilters` <a name="putTargetFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters"></a>

```typescript
public putTargetFilters(value: CloudformationLambdaHookTargetFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.putTargetFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

---

##### `resetAutoUpdate` <a name="resetAutoUpdate" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetAutoUpdate"></a>

```typescript
public resetAutoUpdate(): void
```

##### `resetHookStatus` <a name="resetHookStatus" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetHookStatus"></a>

```typescript
public resetHookStatus(): void
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```

##### `resetStackFilters` <a name="resetStackFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetStackFilters"></a>

```typescript
public resetStackFilters(): void
```

##### `resetTargetFilters` <a name="resetTargetFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.resetTargetFilters"></a>

```typescript
public resetTargetFilters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationLambdaHook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isConstruct"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

cloudformationLambdaHook.CloudformationLambdaHook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformElement"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

cloudformationLambdaHook.CloudformationLambdaHook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformResource"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

cloudformationLambdaHook.CloudformationLambdaHook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudformationLambdaHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationLambdaHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationLambdaHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationLambdaHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookArn">hookArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference">CloudformationLambdaHookLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFilters">stackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference">CloudformationLambdaHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFilters">targetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference">CloudformationLambdaHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdateInput">autoUpdateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureModeInput">failureModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatusInput">hookStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunctionInput">lambdaFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfigInput">loggingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFiltersInput">stackFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFiltersInput">targetFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperationsInput">targetOperationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdate">autoUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureMode">failureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatus">hookStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunction">lambdaFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperations">targetOperations</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hookArn`<sup>Required</sup> <a name="hookArn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookArn"></a>

```typescript
public readonly hookArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: CloudformationLambdaHookLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference">CloudformationLambdaHookLoggingConfigOutputReference</a>

---

##### `stackFilters`<sup>Required</sup> <a name="stackFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFilters"></a>

```typescript
public readonly stackFilters: CloudformationLambdaHookStackFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference">CloudformationLambdaHookStackFiltersOutputReference</a>

---

##### `targetFilters`<sup>Required</sup> <a name="targetFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFilters"></a>

```typescript
public readonly targetFilters: CloudformationLambdaHookTargetFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference">CloudformationLambdaHookTargetFiltersOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `autoUpdateInput`<sup>Optional</sup> <a name="autoUpdateInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdateInput"></a>

```typescript
public readonly autoUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `failureModeInput`<sup>Optional</sup> <a name="failureModeInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureModeInput"></a>

```typescript
public readonly failureModeInput: string;
```

- *Type:* string

---

##### `hookStatusInput`<sup>Optional</sup> <a name="hookStatusInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatusInput"></a>

```typescript
public readonly hookStatusInput: string;
```

- *Type:* string

---

##### `lambdaFunctionInput`<sup>Optional</sup> <a name="lambdaFunctionInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunctionInput"></a>

```typescript
public readonly lambdaFunctionInput: string;
```

- *Type:* string

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: IResolvable | CloudformationLambdaHookLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

---

##### `stackFiltersInput`<sup>Optional</sup> <a name="stackFiltersInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.stackFiltersInput"></a>

```typescript
public readonly stackFiltersInput: IResolvable | CloudformationLambdaHookStackFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

---

##### `targetFiltersInput`<sup>Optional</sup> <a name="targetFiltersInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetFiltersInput"></a>

```typescript
public readonly targetFiltersInput: IResolvable | CloudformationLambdaHookTargetFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

---

##### `targetOperationsInput`<sup>Optional</sup> <a name="targetOperationsInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperationsInput"></a>

```typescript
public readonly targetOperationsInput: string[];
```

- *Type:* string[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `failureMode`<sup>Required</sup> <a name="failureMode" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.failureMode"></a>

```typescript
public readonly failureMode: string;
```

- *Type:* string

---

##### `hookStatus`<sup>Required</sup> <a name="hookStatus" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.hookStatus"></a>

```typescript
public readonly hookStatus: string;
```

- *Type:* string

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: string;
```

- *Type:* string

---

##### `targetOperations`<sup>Required</sup> <a name="targetOperations" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.targetOperations"></a>

```typescript
public readonly targetOperations: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationLambdaHookConfig <a name="CloudformationLambdaHookConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

const cloudformationLambdaHookConfig: cloudformationLambdaHook.CloudformationLambdaHookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.alias">alias</a></code> | <code>string</code> | The typename alias for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.executionRole">executionRole</a></code> | <code>string</code> | The execution role ARN assumed by Hooks to invoke Lambda. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.failureMode">failureMode</a></code> | <code>string</code> | Attribute to specify CloudFormation behavior on hook failure. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lambdaFunction">lambdaFunction</a></code> | <code>string</code> | Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetOperations">targetOperations</a></code> | <code>string[]</code> | Which operations should this Hook run against? Resource changes, stacks or change sets. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.autoUpdate">autoUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.hookStatus">hookStatus</a></code> | <code>string</code> | Attribute to specify which stacks this hook applies to or should get invoked for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a></code> | Contains logging configuration information for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.stackFilters">stackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a></code> | Filters to allow hooks to target specific stack attributes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetFilters">targetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a></code> | Attribute to specify which targets should invoke the hook. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The typename alias for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#alias CloudformationLambdaHook#alias}

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

The execution role ARN assumed by Hooks to invoke Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#execution_role CloudformationLambdaHook#execution_role}

---

##### `failureMode`<sup>Required</sup> <a name="failureMode" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.failureMode"></a>

```typescript
public readonly failureMode: string;
```

- *Type:* string

Attribute to specify CloudFormation behavior on hook failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#failure_mode CloudformationLambdaHook#failure_mode}

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: string;
```

- *Type:* string

Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#lambda_function CloudformationLambdaHook#lambda_function}

---

##### `targetOperations`<sup>Required</sup> <a name="targetOperations" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetOperations"></a>

```typescript
public readonly targetOperations: string[];
```

- *Type:* string[]

Which operations should this Hook run against? Resource changes, stacks or change sets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#target_operations CloudformationLambdaHook#target_operations}

---

##### `autoUpdate`<sup>Optional</sup> <a name="autoUpdate" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#auto_update CloudformationLambdaHook#auto_update}

---

##### `hookStatus`<sup>Optional</sup> <a name="hookStatus" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.hookStatus"></a>

```typescript
public readonly hookStatus: string;
```

- *Type:* string

Attribute to specify which stacks this hook applies to or should get invoked for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#hook_status CloudformationLambdaHook#hook_status}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: CloudformationLambdaHookLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

Contains logging configuration information for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#logging_config CloudformationLambdaHook#logging_config}

---

##### `stackFilters`<sup>Optional</sup> <a name="stackFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.stackFilters"></a>

```typescript
public readonly stackFilters: CloudformationLambdaHookStackFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

Filters to allow hooks to target specific stack attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#stack_filters CloudformationLambdaHook#stack_filters}

---

##### `targetFilters`<sup>Optional</sup> <a name="targetFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookConfig.property.targetFilters"></a>

```typescript
public readonly targetFilters: CloudformationLambdaHookTargetFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

Attribute to specify which targets should invoke the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#target_filters CloudformationLambdaHook#target_filters}

---

### CloudformationLambdaHookLoggingConfig <a name="CloudformationLambdaHookLoggingConfig" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

const cloudformationLambdaHookLoggingConfig: cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logGroupName">logGroupName</a></code> | <code>string</code> | The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logRoleArn">logRoleArn</a></code> | <code>string</code> | The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch Logs. |

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#log_group_name CloudformationLambdaHook#log_group_name}

---

##### `logRoleArn`<sup>Optional</sup> <a name="logRoleArn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig.property.logRoleArn"></a>

```typescript
public readonly logRoleArn: string;
```

- *Type:* string

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#log_role_arn CloudformationLambdaHook#log_role_arn}

---

### CloudformationLambdaHookStackFilters <a name="CloudformationLambdaHookStackFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

const cloudformationLambdaHookStackFilters: cloudformationLambdaHook.CloudformationLambdaHookStackFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.filteringCriteria">filteringCriteria</a></code> | <code>string</code> | Attribute to specify the filtering behavior. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackNames">stackNames</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a></code> | List of stack names as filters. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackRoles">stackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a></code> | List of stack roles that are performing the stack operations. |

---

##### `filteringCriteria`<sup>Optional</sup> <a name="filteringCriteria" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.filteringCriteria"></a>

```typescript
public readonly filteringCriteria: string;
```

- *Type:* string

Attribute to specify the filtering behavior.

ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#filtering_criteria CloudformationLambdaHook#filtering_criteria}

---

##### `stackNames`<sup>Optional</sup> <a name="stackNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackNames"></a>

```typescript
public readonly stackNames: CloudformationLambdaHookStackFiltersStackNames;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

List of stack names as filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#stack_names CloudformationLambdaHook#stack_names}

---

##### `stackRoles`<sup>Optional</sup> <a name="stackRoles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters.property.stackRoles"></a>

```typescript
public readonly stackRoles: CloudformationLambdaHookStackFiltersStackRoles;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

List of stack roles that are performing the stack operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#stack_roles CloudformationLambdaHook#stack_roles}

---

### CloudformationLambdaHookStackFiltersStackNames <a name="CloudformationLambdaHookStackFiltersStackNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

const cloudformationLambdaHookStackFiltersStackNames: cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.exclude">exclude</a></code> | <code>string[]</code> | List of stack names that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.include">include</a></code> | <code>string[]</code> | List of stack names that the hook is going to target. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

List of stack names that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#exclude CloudformationLambdaHook#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

List of stack names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#include CloudformationLambdaHook#include}

---

### CloudformationLambdaHookStackFiltersStackRoles <a name="CloudformationLambdaHookStackFiltersStackRoles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

const cloudformationLambdaHookStackFiltersStackRoles: cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.exclude">exclude</a></code> | <code>string[]</code> | List of stack roles that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.include">include</a></code> | <code>string[]</code> | List of stack roles that the hook is going to target. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

List of stack roles that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#exclude CloudformationLambdaHook#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

List of stack roles that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#include CloudformationLambdaHook#include}

---

### CloudformationLambdaHookTargetFilters <a name="CloudformationLambdaHookTargetFilters" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

const cloudformationLambdaHookTargetFilters: cloudformationLambdaHook.CloudformationLambdaHookTargetFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.actions">actions</a></code> | <code>string[]</code> | List of actions that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.invocationPoints">invocationPoints</a></code> | <code>string[]</code> | List of invocation points that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targetNames">targetNames</a></code> | <code>string[]</code> | List of type names that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targets">targets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]</code> | List of hook targets. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

List of actions that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#actions CloudformationLambdaHook#actions}

---

##### `invocationPoints`<sup>Optional</sup> <a name="invocationPoints" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.invocationPoints"></a>

```typescript
public readonly invocationPoints: string[];
```

- *Type:* string[]

List of invocation points that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#invocation_points CloudformationLambdaHook#invocation_points}

---

##### `targetNames`<sup>Optional</sup> <a name="targetNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targetNames"></a>

```typescript
public readonly targetNames: string[];
```

- *Type:* string[]

List of type names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#target_names CloudformationLambdaHook#target_names}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters.property.targets"></a>

```typescript
public readonly targets: IResolvable | CloudformationLambdaHookTargetFiltersTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]

List of hook targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#targets CloudformationLambdaHook#targets}

---

### CloudformationLambdaHookTargetFiltersTargets <a name="CloudformationLambdaHookTargetFiltersTargets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

const cloudformationLambdaHookTargetFiltersTargets: cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.action">action</a></code> | <code>string</code> | Target actions are the type of operation hooks will be executed at. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.invocationPoint">invocationPoint</a></code> | <code>string</code> | Invocation points are the point in provisioning workflow where hooks will be executed. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.targetName">targetName</a></code> | <code>string</code> | Type name of hook target. Hook targets are the destination where hooks will be invoked against. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Target actions are the type of operation hooks will be executed at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#action CloudformationLambdaHook#action}

---

##### `invocationPoint`<sup>Optional</sup> <a name="invocationPoint" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.invocationPoint"></a>

```typescript
public readonly invocationPoint: string;
```

- *Type:* string

Invocation points are the point in provisioning workflow where hooks will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#invocation_point CloudformationLambdaHook#invocation_point}

---

##### `targetName`<sup>Optional</sup> <a name="targetName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

Type name of hook target. Hook targets are the destination where hooks will be invoked against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_lambda_hook#target_name CloudformationLambdaHook#target_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationLambdaHookLoggingConfigOutputReference <a name="CloudformationLambdaHookLoggingConfigOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

new cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogRoleArn">resetLogRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogGroupName"></a>

```typescript
public resetLogGroupName(): void
```

##### `resetLogRoleArn` <a name="resetLogRoleArn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.resetLogRoleArn"></a>

```typescript
public resetLogRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArnInput">logRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn">logRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `logRoleArnInput`<sup>Optional</sup> <a name="logRoleArnInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArnInput"></a>

```typescript
public readonly logRoleArnInput: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `logRoleArn`<sup>Required</sup> <a name="logRoleArn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn"></a>

```typescript
public readonly logRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationLambdaHookLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookLoggingConfig">CloudformationLambdaHookLoggingConfig</a>

---


### CloudformationLambdaHookStackFiltersOutputReference <a name="CloudformationLambdaHookStackFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

new cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackNames">putStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackRoles">putStackRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetFilteringCriteria">resetFilteringCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackNames">resetStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackRoles">resetStackRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStackNames` <a name="putStackNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackNames"></a>

```typescript
public putStackNames(value: CloudformationLambdaHookStackFiltersStackNames): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackNames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

---

##### `putStackRoles` <a name="putStackRoles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackRoles"></a>

```typescript
public putStackRoles(value: CloudformationLambdaHookStackFiltersStackRoles): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.putStackRoles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

---

##### `resetFilteringCriteria` <a name="resetFilteringCriteria" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetFilteringCriteria"></a>

```typescript
public resetFilteringCriteria(): void
```

##### `resetStackNames` <a name="resetStackNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackNames"></a>

```typescript
public resetStackNames(): void
```

##### `resetStackRoles` <a name="resetStackRoles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.resetStackRoles"></a>

```typescript
public resetStackRoles(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNames">stackNames</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference">CloudformationLambdaHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRoles">stackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference">CloudformationLambdaHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteriaInput">filteringCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNamesInput">stackNamesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRolesInput">stackRolesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria">filteringCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stackNames`<sup>Required</sup> <a name="stackNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNames"></a>

```typescript
public readonly stackNames: CloudformationLambdaHookStackFiltersStackNamesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference">CloudformationLambdaHookStackFiltersStackNamesOutputReference</a>

---

##### `stackRoles`<sup>Required</sup> <a name="stackRoles" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRoles"></a>

```typescript
public readonly stackRoles: CloudformationLambdaHookStackFiltersStackRolesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference">CloudformationLambdaHookStackFiltersStackRolesOutputReference</a>

---

##### `filteringCriteriaInput`<sup>Optional</sup> <a name="filteringCriteriaInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteriaInput"></a>

```typescript
public readonly filteringCriteriaInput: string;
```

- *Type:* string

---

##### `stackNamesInput`<sup>Optional</sup> <a name="stackNamesInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackNamesInput"></a>

```typescript
public readonly stackNamesInput: IResolvable | CloudformationLambdaHookStackFiltersStackNames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

---

##### `stackRolesInput`<sup>Optional</sup> <a name="stackRolesInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.stackRolesInput"></a>

```typescript
public readonly stackRolesInput: IResolvable | CloudformationLambdaHookStackFiltersStackRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

---

##### `filteringCriteria`<sup>Required</sup> <a name="filteringCriteria" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria"></a>

```typescript
public readonly filteringCriteria: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationLambdaHookStackFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFilters">CloudformationLambdaHookStackFilters</a>

---


### CloudformationLambdaHookStackFiltersStackNamesOutputReference <a name="CloudformationLambdaHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

new cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.excludeInput">excludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: string[];
```

- *Type:* string[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationLambdaHookStackFiltersStackNames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackNames">CloudformationLambdaHookStackFiltersStackNames</a>

---


### CloudformationLambdaHookStackFiltersStackRolesOutputReference <a name="CloudformationLambdaHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

new cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.excludeInput">excludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: string[];
```

- *Type:* string[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationLambdaHookStackFiltersStackRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookStackFiltersStackRoles">CloudformationLambdaHookStackFiltersStackRoles</a>

---


### CloudformationLambdaHookTargetFiltersOutputReference <a name="CloudformationLambdaHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

new cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetInvocationPoints">resetInvocationPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargetNames">resetTargetNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.putTargets"></a>

```typescript
public putTargets(value: IResolvable | CloudformationLambdaHookTargetFiltersTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetInvocationPoints` <a name="resetInvocationPoints" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetInvocationPoints"></a>

```typescript
public resetInvocationPoints(): void
```

##### `resetTargetNames` <a name="resetTargetNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargetNames"></a>

```typescript
public resetTargetNames(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.resetTargets"></a>

```typescript
public resetTargets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList">CloudformationLambdaHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPointsInput">invocationPointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNamesInput">targetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetsInput">targetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints">invocationPoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNames">targetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targets"></a>

```typescript
public readonly targets: CloudformationLambdaHookTargetFiltersTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList">CloudformationLambdaHookTargetFiltersTargetsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `invocationPointsInput`<sup>Optional</sup> <a name="invocationPointsInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPointsInput"></a>

```typescript
public readonly invocationPointsInput: string[];
```

- *Type:* string[]

---

##### `targetNamesInput`<sup>Optional</sup> <a name="targetNamesInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNamesInput"></a>

```typescript
public readonly targetNamesInput: string[];
```

- *Type:* string[]

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | CloudformationLambdaHookTargetFiltersTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `invocationPoints`<sup>Required</sup> <a name="invocationPoints" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints"></a>

```typescript
public readonly invocationPoints: string[];
```

- *Type:* string[]

---

##### `targetNames`<sup>Required</sup> <a name="targetNames" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.targetNames"></a>

```typescript
public readonly targetNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationLambdaHookTargetFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFilters">CloudformationLambdaHookTargetFilters</a>

---


### CloudformationLambdaHookTargetFiltersTargetsList <a name="CloudformationLambdaHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

new cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.get"></a>

```typescript
public get(index: number): CloudformationLambdaHookTargetFiltersTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationLambdaHookTargetFiltersTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>[]

---


### CloudformationLambdaHookTargetFiltersTargetsOutputReference <a name="CloudformationLambdaHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer"></a>

```typescript
import { cloudformationLambdaHook } from '@cdktn/provider-awscc'

new cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetInvocationPoint">resetInvocationPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetTargetName">resetTargetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetInvocationPoint` <a name="resetInvocationPoint" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetInvocationPoint"></a>

```typescript
public resetInvocationPoint(): void
```

##### `resetTargetName` <a name="resetTargetName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.resetTargetName"></a>

```typescript
public resetTargetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPointInput">invocationPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetNameInput">targetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint">invocationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName">targetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `invocationPointInput`<sup>Optional</sup> <a name="invocationPointInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPointInput"></a>

```typescript
public readonly invocationPointInput: string;
```

- *Type:* string

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetNameInput"></a>

```typescript
public readonly targetNameInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `invocationPoint`<sup>Required</sup> <a name="invocationPoint" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```typescript
public readonly invocationPoint: string;
```

- *Type:* string

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationLambdaHookTargetFiltersTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationLambdaHook.CloudformationLambdaHookTargetFiltersTargets">CloudformationLambdaHookTargetFiltersTargets</a>

---



