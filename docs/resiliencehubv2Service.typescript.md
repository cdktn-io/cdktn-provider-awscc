# `resiliencehubv2Service` Submodule <a name="`resiliencehubv2Service` Submodule" id="@cdktn/provider-awscc.resiliencehubv2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Service <a name="Resiliencehubv2Service" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service awscc_resiliencehubv2_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2Service(scope: Construct, id: string, config: Resiliencehubv2ServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig">Resiliencehubv2ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig">Resiliencehubv2ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions">putAssertions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems">putAssociatedSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources">putInputSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel">putPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration">putReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssertions">resetAssertions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystems">resetAssociatedSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery">resetDependencyDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetInputSources">resetInputSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel">resetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn">resetPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetReportConfiguration">resetReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssertions` <a name="putAssertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions"></a>

```typescript
public putAssertions(value: IResolvable | Resiliencehubv2ServiceAssertions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]

---

##### `putAssociatedSystems` <a name="putAssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems"></a>

```typescript
public putAssociatedSystems(value: IResolvable | Resiliencehubv2ServiceAssociatedSystems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]

---

##### `putInputSources` <a name="putInputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources"></a>

```typescript
public putInputSources(value: IResolvable | Resiliencehubv2ServiceInputSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]

---

##### `putPermissionModel` <a name="putPermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel"></a>

```typescript
public putPermissionModel(value: Resiliencehubv2ServicePermissionModel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---

##### `putReportConfiguration` <a name="putReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration"></a>

```typescript
public putReportConfiguration(value: Resiliencehubv2ServiceReportConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags"></a>

```typescript
public putTags(value: IResolvable | Resiliencehubv2ServiceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]

---

##### `resetAssertions` <a name="resetAssertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssertions"></a>

```typescript
public resetAssertions(): void
```

##### `resetAssociatedSystems` <a name="resetAssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystems"></a>

```typescript
public resetAssociatedSystems(): void
```

##### `resetDependencyDiscovery` <a name="resetDependencyDiscovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery"></a>

```typescript
public resetDependencyDiscovery(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInputSources` <a name="resetInputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetInputSources"></a>

```typescript
public resetInputSources(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPermissionModel` <a name="resetPermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel"></a>

```typescript
public resetPermissionModel(): void
```

##### `resetPolicyArn` <a name="resetPolicyArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn"></a>

```typescript
public resetPolicyArn(): void
```

##### `resetReportConfiguration` <a name="resetReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetReportConfiguration"></a>

```typescript
public resetReportConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

resiliencehubv2Service.Resiliencehubv2Service.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Resiliencehubv2Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Resiliencehubv2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertions">assertions</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList">Resiliencehubv2ServiceAssertionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystems">associatedSystems</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList">Resiliencehubv2ServiceAssociatedSystemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.effectivePolicyValues">effectivePolicyValues</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSources">inputSources</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList">Resiliencehubv2ServiceInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference">Resiliencehubv2ServicePermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfiguration">reportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference">Resiliencehubv2ServiceReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.serviceArn">serviceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList">Resiliencehubv2ServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertionsInput">assertionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemsInput">associatedSystemsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput">dependencyDiscoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSourcesInput">inputSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput">permissionModelInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput">policyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfigurationInput">reportConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery">dependencyDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assertions`<sup>Required</sup> <a name="assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertions"></a>

```typescript
public readonly assertions: Resiliencehubv2ServiceAssertionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList">Resiliencehubv2ServiceAssertionsList</a>

---

##### `associatedSystems`<sup>Required</sup> <a name="associatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystems"></a>

```typescript
public readonly associatedSystems: Resiliencehubv2ServiceAssociatedSystemsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList">Resiliencehubv2ServiceAssociatedSystemsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `effectivePolicyValues`<sup>Required</sup> <a name="effectivePolicyValues" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.effectivePolicyValues"></a>

```typescript
public readonly effectivePolicyValues: Resiliencehubv2ServiceEffectivePolicyValuesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputSources`<sup>Required</sup> <a name="inputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSources"></a>

```typescript
public readonly inputSources: Resiliencehubv2ServiceInputSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList">Resiliencehubv2ServiceInputSourcesList</a>

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel"></a>

```typescript
public readonly permissionModel: Resiliencehubv2ServicePermissionModelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference">Resiliencehubv2ServicePermissionModelOutputReference</a>

---

##### `reportConfiguration`<sup>Required</sup> <a name="reportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfiguration"></a>

```typescript
public readonly reportConfiguration: Resiliencehubv2ServiceReportConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference">Resiliencehubv2ServiceReportConfigurationOutputReference</a>

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tags"></a>

```typescript
public readonly tags: Resiliencehubv2ServiceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList">Resiliencehubv2ServiceTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `assertionsInput`<sup>Optional</sup> <a name="assertionsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertionsInput"></a>

```typescript
public readonly assertionsInput: IResolvable | Resiliencehubv2ServiceAssertions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]

---

##### `associatedSystemsInput`<sup>Optional</sup> <a name="associatedSystemsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemsInput"></a>

```typescript
public readonly associatedSystemsInput: IResolvable | Resiliencehubv2ServiceAssociatedSystems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]

---

##### `dependencyDiscoveryInput`<sup>Optional</sup> <a name="dependencyDiscoveryInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput"></a>

```typescript
public readonly dependencyDiscoveryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inputSourcesInput`<sup>Optional</sup> <a name="inputSourcesInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSourcesInput"></a>

```typescript
public readonly inputSourcesInput: IResolvable | Resiliencehubv2ServiceInputSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionModelInput`<sup>Optional</sup> <a name="permissionModelInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput"></a>

```typescript
public readonly permissionModelInput: IResolvable | Resiliencehubv2ServicePermissionModel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---

##### `policyArnInput`<sup>Optional</sup> <a name="policyArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput"></a>

```typescript
public readonly policyArnInput: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `reportConfigurationInput`<sup>Optional</sup> <a name="reportConfigurationInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfigurationInput"></a>

```typescript
public readonly reportConfigurationInput: IResolvable | Resiliencehubv2ServiceReportConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Resiliencehubv2ServiceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]

---

##### `dependencyDiscovery`<sup>Required</sup> <a name="dependencyDiscovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery"></a>

```typescript
public readonly dependencyDiscovery: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2ServiceAssertions <a name="Resiliencehubv2ServiceAssertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceAssertions: resiliencehubv2Service.Resiliencehubv2ServiceAssertions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.property.text">text</a></code> | <code>string</code> | The text of the assertion. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

The text of the assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#text Resiliencehubv2Service#text}

---

### Resiliencehubv2ServiceAssociatedSystems <a name="Resiliencehubv2ServiceAssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceAssociatedSystems: resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.systemArn">systemArn</a></code> | <code>string</code> | The system ARN. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.userJourneyIds">userJourneyIds</a></code> | <code>string[]</code> | User journey IDs associated with this system. |

---

##### `systemArn`<sup>Optional</sup> <a name="systemArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.systemArn"></a>

```typescript
public readonly systemArn: string;
```

- *Type:* string

The system ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#system_arn Resiliencehubv2Service#system_arn}

---

##### `userJourneyIds`<sup>Optional</sup> <a name="userJourneyIds" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.userJourneyIds"></a>

```typescript
public readonly userJourneyIds: string[];
```

- *Type:* string[]

User journey IDs associated with this system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#user_journey_ids Resiliencehubv2Service#user_journey_ids}

---

### Resiliencehubv2ServiceConfig <a name="Resiliencehubv2ServiceConfig" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceConfig: resiliencehubv2Service.Resiliencehubv2ServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name">name</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions">regions</a></code> | <code>string[]</code> | AWS regions for the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.assertions">assertions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]</code> | Assertions associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystems">associatedSystems</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]</code> | Systems associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery">dependencyDiscovery</a></code> | <code>string</code> | Dependency discovery state. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description">description</a></code> | <code>string</code> | The description of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.inputSources">inputSources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]</code> | Input sources for this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The KMS key ID for encrypting service data. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn">policyArn</a></code> | <code>string</code> | The ARN of the resilience policy to associate. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.reportConfiguration">reportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | Configuration for automatic report generation on a Service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]</code> | Tags assigned to the service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

AWS regions for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}

---

##### `assertions`<sup>Optional</sup> <a name="assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.assertions"></a>

```typescript
public readonly assertions: IResolvable | Resiliencehubv2ServiceAssertions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]

Assertions associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#assertions Resiliencehubv2Service#assertions}

---

##### `associatedSystems`<sup>Optional</sup> <a name="associatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystems"></a>

```typescript
public readonly associatedSystems: IResolvable | Resiliencehubv2ServiceAssociatedSystems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]

Systems associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#associated_systems Resiliencehubv2Service#associated_systems}

---

##### `dependencyDiscovery`<sup>Optional</sup> <a name="dependencyDiscovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery"></a>

```typescript
public readonly dependencyDiscovery: string;
```

- *Type:* string

Dependency discovery state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}

---

##### `inputSources`<sup>Optional</sup> <a name="inputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.inputSources"></a>

```typescript
public readonly inputSources: IResolvable | Resiliencehubv2ServiceInputSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]

Input sources for this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#input_sources Resiliencehubv2Service#input_sources}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The KMS key ID for encrypting service data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel"></a>

```typescript
public readonly permissionModel: Resiliencehubv2ServicePermissionModel;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}.

---

##### `policyArn`<sup>Optional</sup> <a name="policyArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

The ARN of the resilience policy to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}

---

##### `reportConfiguration`<sup>Optional</sup> <a name="reportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.reportConfiguration"></a>

```typescript
public readonly reportConfiguration: Resiliencehubv2ServiceReportConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

Configuration for automatic report generation on a Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#report_configuration Resiliencehubv2Service#report_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Resiliencehubv2ServiceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]

Tags assigned to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}

---

### Resiliencehubv2ServiceEffectivePolicyValues <a name="Resiliencehubv2ServiceEffectivePolicyValues" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceEffectivePolicyValues: resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues = { ... }
```


### Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo <a name="Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo: resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo = { ... }
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach: resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach = { ... }
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo: resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo = { ... }
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto: resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto = { ... }
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach: resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach = { ... }
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo: resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo = { ... }
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto: resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto = { ... }
```


### Resiliencehubv2ServiceInputSources <a name="Resiliencehubv2ServiceInputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceInputSources: resiliencehubv2Service.Resiliencehubv2ServiceInputSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.property.resourceConfiguration">resourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | Resource configuration for an input source. Provide exactly one field. |

---

##### `resourceConfiguration`<sup>Optional</sup> <a name="resourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.property.resourceConfiguration"></a>

```typescript
public readonly resourceConfiguration: Resiliencehubv2ServiceInputSourcesResourceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

Resource configuration for an input source. Provide exactly one field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#resource_configuration Resiliencehubv2Service#resource_configuration}

---

### Resiliencehubv2ServiceInputSourcesResourceConfiguration <a name="Resiliencehubv2ServiceInputSourcesResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceInputSourcesResourceConfiguration: resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.cfnStackArn">cfnStackArn</a></code> | <code>string</code> | ARN of a CloudFormation stack. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.designFileS3Url">designFileS3Url</a></code> | <code>string</code> | S3 URL of a design file. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#eks Resiliencehubv2Service#eks}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.resourceTags">resourceTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]</code> | Resource tags to discover resources. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.tfStateFileUrl">tfStateFileUrl</a></code> | <code>string</code> | URL of a Terraform state file. |

---

##### `cfnStackArn`<sup>Optional</sup> <a name="cfnStackArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.cfnStackArn"></a>

```typescript
public readonly cfnStackArn: string;
```

- *Type:* string

ARN of a CloudFormation stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cfn_stack_arn Resiliencehubv2Service#cfn_stack_arn}

---

##### `designFileS3Url`<sup>Optional</sup> <a name="designFileS3Url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.designFileS3Url"></a>

```typescript
public readonly designFileS3Url: string;
```

- *Type:* string

S3 URL of a design file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#design_file_s3_url Resiliencehubv2Service#design_file_s3_url}

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.eks"></a>

```typescript
public readonly eks: Resiliencehubv2ServiceInputSourcesResourceConfigurationEks;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#eks Resiliencehubv2Service#eks}.

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.resourceTags"></a>

```typescript
public readonly resourceTags: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]

Resource tags to discover resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#resource_tags Resiliencehubv2Service#resource_tags}

---

##### `tfStateFileUrl`<sup>Optional</sup> <a name="tfStateFileUrl" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.tfStateFileUrl"></a>

```typescript
public readonly tfStateFileUrl: string;
```

- *Type:* string

URL of a Terraform state file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#tf_state_file_url Resiliencehubv2Service#tf_state_file_url}

---

### Resiliencehubv2ServiceInputSourcesResourceConfigurationEks <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationEks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceInputSourcesResourceConfigurationEks: resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.clusterArn">clusterArn</a></code> | <code>string</code> | ARN of the EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.namespaces">namespaces</a></code> | <code>string[]</code> | EKS namespaces. |

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

ARN of the EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cluster_arn Resiliencehubv2Service#cluster_arn}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

EKS namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#namespaces Resiliencehubv2Service#namespaces}

---

### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags: resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.key">key</a></code> | <code>string</code> | Tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.values">values</a></code> | <code>string[]</code> | Tag values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#key Resiliencehubv2Service#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#values Resiliencehubv2Service#values}

---

### Resiliencehubv2ServicePermissionModel <a name="Resiliencehubv2ServicePermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServicePermissionModel: resiliencehubv2Service.Resiliencehubv2ServicePermissionModel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRoleArns">crossAccountRoleArns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]</code> | Cross-account role ARNs. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName">invokerRoleName</a></code> | <code>string</code> | Name of the invoker IAM role. |

---

##### `crossAccountRoleArns`<sup>Optional</sup> <a name="crossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRoleArns"></a>

```typescript
public readonly crossAccountRoleArns: IResolvable | Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]

Cross-account role ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cross_account_role_arns Resiliencehubv2Service#cross_account_role_arns}

---

##### `invokerRoleName`<sup>Optional</sup> <a name="invokerRoleName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName"></a>

```typescript
public readonly invokerRoleName: string;
```

- *Type:* string

Name of the invoker IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}

---

### Resiliencehubv2ServicePermissionModelCrossAccountRoleArns <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServicePermissionModelCrossAccountRoleArns: resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.crossAccountRoleArn">crossAccountRoleArn</a></code> | <code>string</code> | ARN of the cross-account IAM role. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.externalId">externalId</a></code> | <code>string</code> | External ID for cross-account access. |

---

##### `crossAccountRoleArn`<sup>Optional</sup> <a name="crossAccountRoleArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.crossAccountRoleArn"></a>

```typescript
public readonly crossAccountRoleArn: string;
```

- *Type:* string

ARN of the cross-account IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

External ID for cross-account access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}

---

### Resiliencehubv2ServiceReportConfiguration <a name="Resiliencehubv2ServiceReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceReportConfiguration: resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.property.reportOutput">reportOutput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]</code> | Output destinations for generated reports. |

---

##### `reportOutput`<sup>Optional</sup> <a name="reportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.property.reportOutput"></a>

```typescript
public readonly reportOutput: IResolvable | Resiliencehubv2ServiceReportConfigurationReportOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]

Output destinations for generated reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#report_output Resiliencehubv2Service#report_output}

---

### Resiliencehubv2ServiceReportConfigurationReportOutput <a name="Resiliencehubv2ServiceReportConfigurationReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceReportConfigurationReportOutput: resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | S3 configuration for report output. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.property.s3"></a>

```typescript
public readonly s3: Resiliencehubv2ServiceReportConfigurationReportOutputS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

S3 configuration for report output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#s3 Resiliencehubv2Service#s3}

---

### Resiliencehubv2ServiceReportConfigurationReportOutputS3 <a name="Resiliencehubv2ServiceReportConfigurationReportOutputS3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceReportConfigurationReportOutputS3: resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | Account ID of the bucket owner. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketPath">bucketPath</a></code> | <code>string</code> | S3 bucket path where reports will be written. |

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

Account ID of the bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#bucket_owner Resiliencehubv2Service#bucket_owner}

---

##### `bucketPath`<sup>Optional</sup> <a name="bucketPath" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketPath"></a>

```typescript
public readonly bucketPath: string;
```

- *Type:* string

S3 bucket path where reports will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#bucket_path Resiliencehubv2Service#bucket_path}

---

### Resiliencehubv2ServiceTags <a name="Resiliencehubv2ServiceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

const resiliencehubv2ServiceTags: resiliencehubv2Service.Resiliencehubv2ServiceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#key Resiliencehubv2Service#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#value Resiliencehubv2Service#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2ServiceAssertionsList <a name="Resiliencehubv2ServiceAssertionsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get"></a>

```typescript
public get(index: number): Resiliencehubv2ServiceAssertionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceAssertions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]

---


### Resiliencehubv2ServiceAssertionsOutputReference <a name="Resiliencehubv2ServiceAssertionsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceAssertions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>

---


### Resiliencehubv2ServiceAssociatedSystemsList <a name="Resiliencehubv2ServiceAssociatedSystemsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get"></a>

```typescript
public get(index: number): Resiliencehubv2ServiceAssociatedSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceAssociatedSystems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]

---


### Resiliencehubv2ServiceAssociatedSystemsOutputReference <a name="Resiliencehubv2ServiceAssociatedSystemsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetSystemArn">resetSystemArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetUserJourneyIds">resetUserJourneyIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSystemArn` <a name="resetSystemArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetSystemArn"></a>

```typescript
public resetSystemArn(): void
```

##### `resetUserJourneyIds` <a name="resetUserJourneyIds" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetUserJourneyIds"></a>

```typescript
public resetUserJourneyIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArnInput">systemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIdsInput">userJourneyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn">systemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds">userJourneyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `systemArnInput`<sup>Optional</sup> <a name="systemArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArnInput"></a>

```typescript
public readonly systemArnInput: string;
```

- *Type:* string

---

##### `userJourneyIdsInput`<sup>Optional</sup> <a name="userJourneyIdsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIdsInput"></a>

```typescript
public readonly userJourneyIdsInput: string[];
```

- *Type:* string[]

---

##### `systemArn`<sup>Required</sup> <a name="systemArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn"></a>

```typescript
public readonly systemArn: string;
```

- *Type:* string

---

##### `userJourneyIds`<sup>Required</sup> <a name="userJourneyIds" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds"></a>

```typescript
public readonly userJourneyIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceAssociatedSystems;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo">availabilitySlo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach">multiAzDrApproach</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo">multiAzRpo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto">multiAzRto</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach">multiRegionDrApproach</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo">multiRegionRpo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto">multiRegionRto</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues">Resiliencehubv2ServiceEffectivePolicyValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilitySlo`<sup>Required</sup> <a name="availabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo"></a>

```typescript
public readonly availabilitySlo: Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a>

---

##### `multiAzDrApproach`<sup>Required</sup> <a name="multiAzDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach"></a>

```typescript
public readonly multiAzDrApproach: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a>

---

##### `multiAzRpo`<sup>Required</sup> <a name="multiAzRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo"></a>

```typescript
public readonly multiAzRpo: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a>

---

##### `multiAzRto`<sup>Required</sup> <a name="multiAzRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto"></a>

```typescript
public readonly multiAzRto: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a>

---

##### `multiRegionDrApproach`<sup>Required</sup> <a name="multiRegionDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach"></a>

```typescript
public readonly multiRegionDrApproach: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a>

---

##### `multiRegionRpo`<sup>Required</sup> <a name="multiRegionRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo"></a>

```typescript
public readonly multiRegionRpo: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a>

---

##### `multiRegionRto`<sup>Required</sup> <a name="multiRegionRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto"></a>

```typescript
public readonly multiRegionRto: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Resiliencehubv2ServiceEffectivePolicyValues;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues">Resiliencehubv2ServiceEffectivePolicyValues</a>

---


### Resiliencehubv2ServiceInputSourcesList <a name="Resiliencehubv2ServiceInputSourcesList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get"></a>

```typescript
public get(index: number): Resiliencehubv2ServiceInputSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceInputSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]

---


### Resiliencehubv2ServiceInputSourcesOutputReference <a name="Resiliencehubv2ServiceInputSourcesOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration">putResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resetResourceConfiguration">resetResourceConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceConfiguration` <a name="putResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration"></a>

```typescript
public putResourceConfiguration(value: Resiliencehubv2ServiceInputSourcesResourceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---

##### `resetResourceConfiguration` <a name="resetResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resetResourceConfiguration"></a>

```typescript
public resetResourceConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration">resourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfigurationInput">resourceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceConfiguration`<sup>Required</sup> <a name="resourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration"></a>

```typescript
public readonly resourceConfiguration: Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a>

---

##### `resourceConfigurationInput`<sup>Optional</sup> <a name="resourceConfigurationInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfigurationInput"></a>

```typescript
public readonly resourceConfigurationInput: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceInputSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetClusterArn">resetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetNamespaces">resetNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterArn` <a name="resetClusterArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetClusterArn"></a>

```typescript
public resetClusterArn(): void
```

##### `resetNamespaces` <a name="resetNamespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetNamespaces"></a>

```typescript
public resetNamespaces(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces">namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespacesInput"></a>

```typescript
public readonly namespacesInput: string[];
```

- *Type:* string[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfigurationEks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks">putEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetCfnStackArn">resetCfnStackArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetDesignFileS3Url">resetDesignFileS3Url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetEks">resetEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetTfStateFileUrl">resetTfStateFileUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEks` <a name="putEks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks"></a>

```typescript
public putEks(value: Resiliencehubv2ServiceInputSourcesResourceConfigurationEks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---

##### `putResourceTags` <a name="putResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags"></a>

```typescript
public putResourceTags(value: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]

---

##### `resetCfnStackArn` <a name="resetCfnStackArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetCfnStackArn"></a>

```typescript
public resetCfnStackArn(): void
```

##### `resetDesignFileS3Url` <a name="resetDesignFileS3Url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetDesignFileS3Url"></a>

```typescript
public resetDesignFileS3Url(): void
```

##### `resetEks` <a name="resetEks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetEks"></a>

```typescript
public resetEks(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```

##### `resetTfStateFileUrl` <a name="resetTfStateFileUrl" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetTfStateFileUrl"></a>

```typescript
public resetTfStateFileUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArnInput">cfnStackArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3UrlInput">designFileS3UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eksInput">eksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTagsInput">resourceTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrlInput">tfStateFileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn">cfnStackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url">designFileS3Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl">tfStateFileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eks`<sup>Required</sup> <a name="eks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks"></a>

```typescript
public readonly eks: Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a>

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags"></a>

```typescript
public readonly resourceTags: Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a>

---

##### `cfnStackArnInput`<sup>Optional</sup> <a name="cfnStackArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArnInput"></a>

```typescript
public readonly cfnStackArnInput: string;
```

- *Type:* string

---

##### `designFileS3UrlInput`<sup>Optional</sup> <a name="designFileS3UrlInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3UrlInput"></a>

```typescript
public readonly designFileS3UrlInput: string;
```

- *Type:* string

---

##### `eksInput`<sup>Optional</sup> <a name="eksInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eksInput"></a>

```typescript
public readonly eksInput: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfigurationEks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]

---

##### `tfStateFileUrlInput`<sup>Optional</sup> <a name="tfStateFileUrlInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrlInput"></a>

```typescript
public readonly tfStateFileUrlInput: string;
```

- *Type:* string

---

##### `cfnStackArn`<sup>Required</sup> <a name="cfnStackArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn"></a>

```typescript
public readonly cfnStackArn: string;
```

- *Type:* string

---

##### `designFileS3Url`<sup>Required</sup> <a name="designFileS3Url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url"></a>

```typescript
public readonly designFileS3Url: string;
```

- *Type:* string

---

##### `tfStateFileUrl`<sup>Required</sup> <a name="tfStateFileUrl" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl"></a>

```typescript
public readonly tfStateFileUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get"></a>

```typescript
public get(index: number): Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get"></a>

```typescript
public get(index: number): Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetCrossAccountRoleArn">resetCrossAccountRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrossAccountRoleArn` <a name="resetCrossAccountRoleArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetCrossAccountRoleArn"></a>

```typescript
public resetCrossAccountRoleArn(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArnInput">crossAccountRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn">crossAccountRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossAccountRoleArnInput`<sup>Optional</sup> <a name="crossAccountRoleArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArnInput"></a>

```typescript
public readonly crossAccountRoleArnInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `crossAccountRoleArn`<sup>Required</sup> <a name="crossAccountRoleArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn"></a>

```typescript
public readonly crossAccountRoleArn: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServicePermissionModelCrossAccountRoleArns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>

---


### Resiliencehubv2ServicePermissionModelOutputReference <a name="Resiliencehubv2ServicePermissionModelOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns">putCrossAccountRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRoleArns">resetCrossAccountRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetInvokerRoleName">resetInvokerRoleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossAccountRoleArns` <a name="putCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns"></a>

```typescript
public putCrossAccountRoleArns(value: IResolvable | Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]

---

##### `resetCrossAccountRoleArns` <a name="resetCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRoleArns"></a>

```typescript
public resetCrossAccountRoleArns(): void
```

##### `resetInvokerRoleName` <a name="resetInvokerRoleName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetInvokerRoleName"></a>

```typescript
public resetInvokerRoleName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns">crossAccountRoleArns</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArnsInput">crossAccountRoleArnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput">invokerRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName">invokerRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossAccountRoleArns`<sup>Required</sup> <a name="crossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns"></a>

```typescript
public readonly crossAccountRoleArns: Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a>

---

##### `crossAccountRoleArnsInput`<sup>Optional</sup> <a name="crossAccountRoleArnsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArnsInput"></a>

```typescript
public readonly crossAccountRoleArnsInput: IResolvable | Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]

---

##### `invokerRoleNameInput`<sup>Optional</sup> <a name="invokerRoleNameInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput"></a>

```typescript
public readonly invokerRoleNameInput: string;
```

- *Type:* string

---

##### `invokerRoleName`<sup>Required</sup> <a name="invokerRoleName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName"></a>

```typescript
public readonly invokerRoleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServicePermissionModel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---


### Resiliencehubv2ServiceReportConfigurationOutputReference <a name="Resiliencehubv2ServiceReportConfigurationOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput">putReportOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resetReportOutput">resetReportOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReportOutput` <a name="putReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput"></a>

```typescript
public putReportOutput(value: IResolvable | Resiliencehubv2ServiceReportConfigurationReportOutput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]

---

##### `resetReportOutput` <a name="resetReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resetReportOutput"></a>

```typescript
public resetReportOutput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput">reportOutput</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList">Resiliencehubv2ServiceReportConfigurationReportOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutputInput">reportOutputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reportOutput`<sup>Required</sup> <a name="reportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput"></a>

```typescript
public readonly reportOutput: Resiliencehubv2ServiceReportConfigurationReportOutputList;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList">Resiliencehubv2ServiceReportConfigurationReportOutputList</a>

---

##### `reportOutputInput`<sup>Optional</sup> <a name="reportOutputInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutputInput"></a>

```typescript
public readonly reportOutputInput: IResolvable | Resiliencehubv2ServiceReportConfigurationReportOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceReportConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

---


### Resiliencehubv2ServiceReportConfigurationReportOutputList <a name="Resiliencehubv2ServiceReportConfigurationReportOutputList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get"></a>

```typescript
public get(index: number): Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceReportConfigurationReportOutput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]

---


### Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference <a name="Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3"></a>

```typescript
public putS3(value: Resiliencehubv2ServiceReportConfigurationReportOutputS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3"></a>

```typescript
public readonly s3: Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | Resiliencehubv2ServiceReportConfigurationReportOutputS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceReportConfigurationReportOutput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>

---


### Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference <a name="Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketPath">resetBucketPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```

##### `resetBucketPath` <a name="resetBucketPath" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketPath"></a>

```typescript
public resetBucketPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPathInput">bucketPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath">bucketPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `bucketPathInput`<sup>Optional</sup> <a name="bucketPathInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPathInput"></a>

```typescript
public readonly bucketPathInput: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `bucketPath`<sup>Required</sup> <a name="bucketPath" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath"></a>

```typescript
public readonly bucketPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceReportConfigurationReportOutputS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---


### Resiliencehubv2ServiceTagsList <a name="Resiliencehubv2ServiceTagsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get"></a>

```typescript
public get(index: number): Resiliencehubv2ServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]

---


### Resiliencehubv2ServiceTagsOutputReference <a name="Resiliencehubv2ServiceTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-awscc'

new resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>

---



