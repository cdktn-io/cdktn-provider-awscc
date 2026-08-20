# `datazoneEnvironmentBlueprintConfiguration` Submodule <a name="`datazoneEnvironmentBlueprintConfiguration` Submodule" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironmentBlueprintConfiguration <a name="DatazoneEnvironmentBlueprintConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration awscc_datazone_environment_blueprint_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

new datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration(scope: Construct, id: string, config: DatazoneEnvironmentBlueprintConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig">DatazoneEnvironmentBlueprintConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig">DatazoneEnvironmentBlueprintConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations">putProvisioningConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters">putRegionalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetEnvironmentRolePermissionBoundary">resetEnvironmentRolePermissionBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetGlobalParameters">resetGlobalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetManageAccessRoleArn">resetManageAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningConfigurations">resetProvisioningConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningRoleArn">resetProvisioningRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegionalParameters">resetRegionalParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProvisioningConfigurations` <a name="putProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations"></a>

```typescript
public putProvisioningConfigurations(value: IResolvable | DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]

---

##### `putRegionalParameters` <a name="putRegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters"></a>

```typescript
public putRegionalParameters(value: IResolvable | DatazoneEnvironmentBlueprintConfigurationRegionalParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]

---

##### `resetEnvironmentRolePermissionBoundary` <a name="resetEnvironmentRolePermissionBoundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetEnvironmentRolePermissionBoundary"></a>

```typescript
public resetEnvironmentRolePermissionBoundary(): void
```

##### `resetGlobalParameters` <a name="resetGlobalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetGlobalParameters"></a>

```typescript
public resetGlobalParameters(): void
```

##### `resetManageAccessRoleArn` <a name="resetManageAccessRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetManageAccessRoleArn"></a>

```typescript
public resetManageAccessRoleArn(): void
```

##### `resetProvisioningConfigurations` <a name="resetProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningConfigurations"></a>

```typescript
public resetProvisioningConfigurations(): void
```

##### `resetProvisioningRoleArn` <a name="resetProvisioningRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningRoleArn"></a>

```typescript
public resetProvisioningRoleArn(): void
```

##### `resetRegionalParameters` <a name="resetRegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegionalParameters"></a>

```typescript
public resetRegionalParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneEnvironmentBlueprintConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneEnvironmentBlueprintConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironmentBlueprintConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations">provisioningConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParameters">regionalParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegionsInput">enabledRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifierInput">environmentBlueprintIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundaryInput">environmentRolePermissionBoundaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParametersInput">globalParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArnInput">manageAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurationsInput">provisioningConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArnInput">provisioningRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParametersInput">regionalParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegions">enabledRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary">environmentRolePermissionBoundary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParameters">globalParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn">manageAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn">provisioningRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `environmentBlueprintId`<sup>Required</sup> <a name="environmentBlueprintId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId"></a>

```typescript
public readonly environmentBlueprintId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `provisioningConfigurations`<sup>Required</sup> <a name="provisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations"></a>

```typescript
public readonly provisioningConfigurations: DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a>

---

##### `regionalParameters`<sup>Required</sup> <a name="regionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParameters"></a>

```typescript
public readonly regionalParameters: DatazoneEnvironmentBlueprintConfigurationRegionalParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifierInput"></a>

```typescript
public readonly domainIdentifierInput: string;
```

- *Type:* string

---

##### `enabledRegionsInput`<sup>Optional</sup> <a name="enabledRegionsInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegionsInput"></a>

```typescript
public readonly enabledRegionsInput: string[];
```

- *Type:* string[]

---

##### `environmentBlueprintIdentifierInput`<sup>Optional</sup> <a name="environmentBlueprintIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifierInput"></a>

```typescript
public readonly environmentBlueprintIdentifierInput: string;
```

- *Type:* string

---

##### `environmentRolePermissionBoundaryInput`<sup>Optional</sup> <a name="environmentRolePermissionBoundaryInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundaryInput"></a>

```typescript
public readonly environmentRolePermissionBoundaryInput: string;
```

- *Type:* string

---

##### `globalParametersInput`<sup>Optional</sup> <a name="globalParametersInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParametersInput"></a>

```typescript
public readonly globalParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `manageAccessRoleArnInput`<sup>Optional</sup> <a name="manageAccessRoleArnInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArnInput"></a>

```typescript
public readonly manageAccessRoleArnInput: string;
```

- *Type:* string

---

##### `provisioningConfigurationsInput`<sup>Optional</sup> <a name="provisioningConfigurationsInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurationsInput"></a>

```typescript
public readonly provisioningConfigurationsInput: IResolvable | DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]

---

##### `provisioningRoleArnInput`<sup>Optional</sup> <a name="provisioningRoleArnInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArnInput"></a>

```typescript
public readonly provisioningRoleArnInput: string;
```

- *Type:* string

---

##### `regionalParametersInput`<sup>Optional</sup> <a name="regionalParametersInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParametersInput"></a>

```typescript
public readonly regionalParametersInput: IResolvable | DatazoneEnvironmentBlueprintConfigurationRegionalParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `enabledRegions`<sup>Required</sup> <a name="enabledRegions" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegions"></a>

```typescript
public readonly enabledRegions: string[];
```

- *Type:* string[]

---

##### `environmentBlueprintIdentifier`<sup>Required</sup> <a name="environmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier"></a>

```typescript
public readonly environmentBlueprintIdentifier: string;
```

- *Type:* string

---

##### `environmentRolePermissionBoundary`<sup>Required</sup> <a name="environmentRolePermissionBoundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary"></a>

```typescript
public readonly environmentRolePermissionBoundary: string;
```

- *Type:* string

---

##### `globalParameters`<sup>Required</sup> <a name="globalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParameters"></a>

```typescript
public readonly globalParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `manageAccessRoleArn`<sup>Required</sup> <a name="manageAccessRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn"></a>

```typescript
public readonly manageAccessRoleArn: string;
```

- *Type:* string

---

##### `provisioningRoleArn`<sup>Required</sup> <a name="provisioningRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn"></a>

```typescript
public readonly provisioningRoleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentBlueprintConfigurationConfig <a name="DatazoneEnvironmentBlueprintConfigurationConfig" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.Initializer"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

const datazoneEnvironmentBlueprintConfigurationConfig: datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#domain_identifier DatazoneEnvironmentBlueprintConfiguration#domain_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.enabledRegions">enabledRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_identifier DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentRolePermissionBoundary">environmentRolePermissionBoundary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#environment_role_permission_boundary DatazoneEnvironmentBlueprintConfiguration#environment_role_permission_boundary}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.globalParameters">globalParameters</a></code> | <code>{[ key: string ]: string}</code> | Region-agnostic environment blueprint parameters. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.manageAccessRoleArn">manageAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningConfigurations">provisioningConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_configurations DatazoneEnvironmentBlueprintConfiguration#provisioning_configurations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningRoleArn">provisioningRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.regionalParameters">regionalParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#domain_identifier DatazoneEnvironmentBlueprintConfiguration#domain_identifier}.

---

##### `enabledRegions`<sup>Required</sup> <a name="enabledRegions" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.enabledRegions"></a>

```typescript
public readonly enabledRegions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}.

---

##### `environmentBlueprintIdentifier`<sup>Required</sup> <a name="environmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentBlueprintIdentifier"></a>

```typescript
public readonly environmentBlueprintIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_identifier DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_identifier}.

---

##### `environmentRolePermissionBoundary`<sup>Optional</sup> <a name="environmentRolePermissionBoundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentRolePermissionBoundary"></a>

```typescript
public readonly environmentRolePermissionBoundary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#environment_role_permission_boundary DatazoneEnvironmentBlueprintConfiguration#environment_role_permission_boundary}.

---

##### `globalParameters`<sup>Optional</sup> <a name="globalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.globalParameters"></a>

```typescript
public readonly globalParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Region-agnostic environment blueprint parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#global_parameters DatazoneEnvironmentBlueprintConfiguration#global_parameters}

---

##### `manageAccessRoleArn`<sup>Optional</sup> <a name="manageAccessRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.manageAccessRoleArn"></a>

```typescript
public readonly manageAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}.

---

##### `provisioningConfigurations`<sup>Optional</sup> <a name="provisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningConfigurations"></a>

```typescript
public readonly provisioningConfigurations: IResolvable | DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_configurations DatazoneEnvironmentBlueprintConfiguration#provisioning_configurations}.

---

##### `provisioningRoleArn`<sup>Optional</sup> <a name="provisioningRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningRoleArn"></a>

```typescript
public readonly provisioningRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}.

---

##### `regionalParameters`<sup>Optional</sup> <a name="regionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.regionalParameters"></a>

```typescript
public readonly regionalParameters: IResolvable | DatazoneEnvironmentBlueprintConfigurationRegionalParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}.

---

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.Initializer"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

const datazoneEnvironmentBlueprintConfigurationProvisioningConfigurations: datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.property.lakeFormationConfiguration">lakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#lake_formation_configuration DatazoneEnvironmentBlueprintConfiguration#lake_formation_configuration}. |

---

##### `lakeFormationConfiguration`<sup>Optional</sup> <a name="lakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.property.lakeFormationConfiguration"></a>

```typescript
public readonly lakeFormationConfiguration: DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#lake_formation_configuration DatazoneEnvironmentBlueprintConfiguration#lake_formation_configuration}.

---

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.Initializer"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

const datazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration: datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationExcludeS3Locations">locationRegistrationExcludeS3Locations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_exclude_s3_locations DatazoneEnvironmentBlueprintConfiguration#location_registration_exclude_s3_locations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationRole">locationRegistrationRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_role DatazoneEnvironmentBlueprintConfiguration#location_registration_role}. |

---

##### `locationRegistrationExcludeS3Locations`<sup>Optional</sup> <a name="locationRegistrationExcludeS3Locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationExcludeS3Locations"></a>

```typescript
public readonly locationRegistrationExcludeS3Locations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_exclude_s3_locations DatazoneEnvironmentBlueprintConfiguration#location_registration_exclude_s3_locations}.

---

##### `locationRegistrationRole`<sup>Optional</sup> <a name="locationRegistrationRole" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationRole"></a>

```typescript
public readonly locationRegistrationRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_role DatazoneEnvironmentBlueprintConfiguration#location_registration_role}.

---

### DatazoneEnvironmentBlueprintConfigurationRegionalParameters <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.Initializer"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

const datazoneEnvironmentBlueprintConfigurationRegionalParameters: datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#parameters DatazoneEnvironmentBlueprintConfiguration#parameters}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#region DatazoneEnvironmentBlueprintConfiguration#region}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#parameters DatazoneEnvironmentBlueprintConfiguration#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_blueprint_configuration#region DatazoneEnvironmentBlueprintConfiguration#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

new datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationExcludeS3Locations">resetLocationRegistrationExcludeS3Locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationRole">resetLocationRegistrationRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocationRegistrationExcludeS3Locations` <a name="resetLocationRegistrationExcludeS3Locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationExcludeS3Locations"></a>

```typescript
public resetLocationRegistrationExcludeS3Locations(): void
```

##### `resetLocationRegistrationRole` <a name="resetLocationRegistrationRole" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationRole"></a>

```typescript
public resetLocationRegistrationRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3LocationsInput">locationRegistrationExcludeS3LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRoleInput">locationRegistrationRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations">locationRegistrationExcludeS3Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole">locationRegistrationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationRegistrationExcludeS3LocationsInput`<sup>Optional</sup> <a name="locationRegistrationExcludeS3LocationsInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3LocationsInput"></a>

```typescript
public readonly locationRegistrationExcludeS3LocationsInput: string[];
```

- *Type:* string[]

---

##### `locationRegistrationRoleInput`<sup>Optional</sup> <a name="locationRegistrationRoleInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRoleInput"></a>

```typescript
public readonly locationRegistrationRoleInput: string;
```

- *Type:* string

---

##### `locationRegistrationExcludeS3Locations`<sup>Required</sup> <a name="locationRegistrationExcludeS3Locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations"></a>

```typescript
public readonly locationRegistrationExcludeS3Locations: string[];
```

- *Type:* string[]

---

##### `locationRegistrationRole`<sup>Required</sup> <a name="locationRegistrationRole" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole"></a>

```typescript
public readonly locationRegistrationRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

---


### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

new datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get"></a>

```typescript
public get(index: number): DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]

---


### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

new datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration">putLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resetLakeFormationConfiguration">resetLakeFormationConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLakeFormationConfiguration` <a name="putLakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration"></a>

```typescript
public putLakeFormationConfiguration(value: DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

---

##### `resetLakeFormationConfiguration` <a name="resetLakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resetLakeFormationConfiguration"></a>

```typescript
public resetLakeFormationConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration">lakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfigurationInput">lakeFormationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lakeFormationConfiguration`<sup>Required</sup> <a name="lakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration"></a>

```typescript
public readonly lakeFormationConfiguration: DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a>

---

##### `lakeFormationConfigurationInput`<sup>Optional</sup> <a name="lakeFormationConfigurationInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfigurationInput"></a>

```typescript
public readonly lakeFormationConfigurationInput: IResolvable | DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>

---


### DatazoneEnvironmentBlueprintConfigurationRegionalParametersList <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParametersList" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

new datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get"></a>

```typescript
public get(index: number): DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneEnvironmentBlueprintConfigurationRegionalParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]

---


### DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer"></a>

```typescript
import { datazoneEnvironmentBlueprintConfiguration } from '@cdktn/provider-awscc'

new datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneEnvironmentBlueprintConfigurationRegionalParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>

---



