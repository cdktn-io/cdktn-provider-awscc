# `sagemakerPartnerApp` Submodule <a name="`sagemakerPartnerApp` Submodule" id="@cdktn/provider-awscc.sagemakerPartnerApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerPartnerApp <a name="SagemakerPartnerApp" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app awscc_sagemaker_partner_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

new sagemakerPartnerApp.SagemakerPartnerApp(scope: Construct, id: string, config: SagemakerPartnerAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig">SagemakerPartnerAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig">SagemakerPartnerAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putApplicationConfig">putApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putMaintenanceConfig">putMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetApplicationConfig">resetApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetAppVersion">resetAppVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableAutoMinorVersionUpgrade">resetEnableAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableIamSessionBasedIdentity">resetEnableIamSessionBasedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetMaintenanceConfig">resetMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationConfig` <a name="putApplicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putApplicationConfig"></a>

```typescript
public putApplicationConfig(value: SagemakerPartnerAppApplicationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

---

##### `putMaintenanceConfig` <a name="putMaintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putMaintenanceConfig"></a>

```typescript
public putMaintenanceConfig(value: SagemakerPartnerAppMaintenanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putMaintenanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerPartnerAppTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>[]

---

##### `resetApplicationConfig` <a name="resetApplicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetApplicationConfig"></a>

```typescript
public resetApplicationConfig(): void
```

##### `resetAppVersion` <a name="resetAppVersion" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetAppVersion"></a>

```typescript
public resetAppVersion(): void
```

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetEnableAutoMinorVersionUpgrade` <a name="resetEnableAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableAutoMinorVersionUpgrade"></a>

```typescript
public resetEnableAutoMinorVersionUpgrade(): void
```

##### `resetEnableIamSessionBasedIdentity` <a name="resetEnableIamSessionBasedIdentity" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableIamSessionBasedIdentity"></a>

```typescript
public resetEnableIamSessionBasedIdentity(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMaintenanceConfig` <a name="resetMaintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetMaintenanceConfig"></a>

```typescript
public resetMaintenanceConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerPartnerApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isConstruct"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

sagemakerPartnerApp.SagemakerPartnerApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformElement"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

sagemakerPartnerApp.SagemakerPartnerApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformResource"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

sagemakerPartnerApp.SagemakerPartnerApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerPartnerApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerPartnerApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerPartnerApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerPartnerApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfig">applicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference">SagemakerPartnerAppApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.currentVersionEolDate">currentVersionEolDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference">SagemakerPartnerAppMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList">SagemakerPartnerAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfigInput">applicationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersionInput">appVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgradeInput">enableAutoMinorVersionUpgradeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentityInput">enableIamSessionBasedIdentityInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfigInput">maintenanceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersion">appVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgrade">enableAutoMinorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentity">enableIamSessionBasedIdentity</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationConfig`<sup>Required</sup> <a name="applicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfig"></a>

```typescript
public readonly applicationConfig: SagemakerPartnerAppApplicationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference">SagemakerPartnerAppApplicationConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `currentVersionEolDate`<sup>Required</sup> <a name="currentVersionEolDate" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.currentVersionEolDate"></a>

```typescript
public readonly currentVersionEolDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceConfig`<sup>Required</sup> <a name="maintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfig"></a>

```typescript
public readonly maintenanceConfig: SagemakerPartnerAppMaintenanceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference">SagemakerPartnerAppMaintenanceConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tags"></a>

```typescript
public readonly tags: SagemakerPartnerAppTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList">SagemakerPartnerAppTagsList</a>

---

##### `applicationConfigInput`<sup>Optional</sup> <a name="applicationConfigInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfigInput"></a>

```typescript
public readonly applicationConfigInput: IResolvable | SagemakerPartnerAppApplicationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

---

##### `appVersionInput`<sup>Optional</sup> <a name="appVersionInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersionInput"></a>

```typescript
public readonly appVersionInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `enableAutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="enableAutoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgradeInput"></a>

```typescript
public readonly enableAutoMinorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableIamSessionBasedIdentityInput`<sup>Optional</sup> <a name="enableIamSessionBasedIdentityInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentityInput"></a>

```typescript
public readonly enableIamSessionBasedIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `maintenanceConfigInput`<sup>Optional</sup> <a name="maintenanceConfigInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfigInput"></a>

```typescript
public readonly maintenanceConfigInput: IResolvable | SagemakerPartnerAppMaintenanceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerPartnerAppTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>[]

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersion"></a>

```typescript
public readonly appVersion: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `enableAutoMinorVersionUpgrade`<sup>Required</sup> <a name="enableAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgrade"></a>

```typescript
public readonly enableAutoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableIamSessionBasedIdentity`<sup>Required</sup> <a name="enableIamSessionBasedIdentity" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentity"></a>

```typescript
public readonly enableIamSessionBasedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerPartnerAppApplicationConfig <a name="SagemakerPartnerAppApplicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.Initializer"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

const sagemakerPartnerAppApplicationConfig: sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.adminUsers">adminUsers</a></code> | <code>string[]</code> | A list of users with administrator privileges for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.arguments">arguments</a></code> | <code>{[ key: string ]: string}</code> | A list of arguments to pass to the PartnerApp. |

---

##### `adminUsers`<sup>Optional</sup> <a name="adminUsers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.adminUsers"></a>

```typescript
public readonly adminUsers: string[];
```

- *Type:* string[]

A list of users with administrator privileges for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#admin_users SagemakerPartnerApp#admin_users}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.arguments"></a>

```typescript
public readonly arguments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of arguments to pass to the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#arguments SagemakerPartnerApp#arguments}

---

### SagemakerPartnerAppConfig <a name="SagemakerPartnerAppConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.Initializer"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

const sagemakerPartnerAppConfig: sagemakerPartnerApp.SagemakerPartnerAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.authType">authType</a></code> | <code>string</code> | The Auth type of PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | The execution role for the user. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.name">name</a></code> | <code>string</code> | A name for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tier">tier</a></code> | <code>string</code> | The tier of the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.type">type</a></code> | <code>string</code> | The type of PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.applicationConfig">applicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a></code> | A collection of settings that specify the maintenance schedule for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.appVersion">appVersion</a></code> | <code>string</code> | The version of the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.clientToken">clientToken</a></code> | <code>string</code> | The client token for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableAutoMinorVersionUpgrade">enableAutoMinorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables automatic minor version upgrades for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableIamSessionBasedIdentity">enableIamSessionBasedIdentity</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables IAM Session based Identity for PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.maintenanceConfig">maintenanceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a></code> | A collection of settings that specify the maintenance schedule for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>[]</code> | A list of tags to apply to the PartnerApp. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

The Auth type of PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#auth_type SagemakerPartnerApp#auth_type}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

The execution role for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#execution_role_arn SagemakerPartnerApp#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#name SagemakerPartnerApp#name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The tier of the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#tier SagemakerPartnerApp#tier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#type SagemakerPartnerApp#type}

---

##### `applicationConfig`<sup>Optional</sup> <a name="applicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.applicationConfig"></a>

```typescript
public readonly applicationConfig: SagemakerPartnerAppApplicationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

A collection of settings that specify the maintenance schedule for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#application_config SagemakerPartnerApp#application_config}

---

##### `appVersion`<sup>Optional</sup> <a name="appVersion" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.appVersion"></a>

```typescript
public readonly appVersion: string;
```

- *Type:* string

The version of the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#app_version SagemakerPartnerApp#app_version}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

The client token for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#client_token SagemakerPartnerApp#client_token}

---

##### `enableAutoMinorVersionUpgrade`<sup>Optional</sup> <a name="enableAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableAutoMinorVersionUpgrade"></a>

```typescript
public readonly enableAutoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables automatic minor version upgrades for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#enable_auto_minor_version_upgrade SagemakerPartnerApp#enable_auto_minor_version_upgrade}

---

##### `enableIamSessionBasedIdentity`<sup>Optional</sup> <a name="enableIamSessionBasedIdentity" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableIamSessionBasedIdentity"></a>

```typescript
public readonly enableIamSessionBasedIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables IAM Session based Identity for PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#enable_iam_session_based_identity SagemakerPartnerApp#enable_iam_session_based_identity}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#kms_key_id SagemakerPartnerApp#kms_key_id}

---

##### `maintenanceConfig`<sup>Optional</sup> <a name="maintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.maintenanceConfig"></a>

```typescript
public readonly maintenanceConfig: SagemakerPartnerAppMaintenanceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

A collection of settings that specify the maintenance schedule for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#maintenance_config SagemakerPartnerApp#maintenance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerPartnerAppTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>[]

A list of tags to apply to the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#tags SagemakerPartnerApp#tags}

---

### SagemakerPartnerAppMaintenanceConfig <a name="SagemakerPartnerAppMaintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig.Initializer"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

const sagemakerPartnerAppMaintenanceConfig: sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>string</code> | The maintenance window start day and time for the PartnerApp. |

---

##### `maintenanceWindowStart`<sup>Optional</sup> <a name="maintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig.property.maintenanceWindowStart"></a>

```typescript
public readonly maintenanceWindowStart: string;
```

- *Type:* string

The maintenance window start day and time for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#maintenance_window_start SagemakerPartnerApp#maintenance_window_start}

---

### SagemakerPartnerAppTags <a name="SagemakerPartnerAppTags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.Initializer"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

const sagemakerPartnerAppTags: sagemakerPartnerApp.SagemakerPartnerAppTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#key SagemakerPartnerApp#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#value SagemakerPartnerApp#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#key SagemakerPartnerApp#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_partner_app#value SagemakerPartnerApp#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerPartnerAppApplicationConfigOutputReference <a name="SagemakerPartnerAppApplicationConfigOutputReference" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

new sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetAdminUsers">resetAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetArguments">resetArguments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminUsers` <a name="resetAdminUsers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetAdminUsers"></a>

```typescript
public resetAdminUsers(): void
```

##### `resetArguments` <a name="resetArguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetArguments"></a>

```typescript
public resetArguments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsers">adminUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.arguments">arguments</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsersInput"></a>

```typescript
public readonly adminUsersInput: string[];
```

- *Type:* string[]

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsers"></a>

```typescript
public readonly adminUsers: string[];
```

- *Type:* string[]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.arguments"></a>

```typescript
public readonly arguments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerPartnerAppApplicationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

---


### SagemakerPartnerAppMaintenanceConfigOutputReference <a name="SagemakerPartnerAppMaintenanceConfigOutputReference" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

new sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resetMaintenanceWindowStart">resetMaintenanceWindowStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaintenanceWindowStart` <a name="resetMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resetMaintenanceWindowStart"></a>

```typescript
public resetMaintenanceWindowStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStartInput">maintenanceWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceWindowStartInput`<sup>Optional</sup> <a name="maintenanceWindowStartInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStartInput"></a>

```typescript
public readonly maintenanceWindowStartInput: string;
```

- *Type:* string

---

##### `maintenanceWindowStart`<sup>Required</sup> <a name="maintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStart"></a>

```typescript
public readonly maintenanceWindowStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerPartnerAppMaintenanceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

---


### SagemakerPartnerAppTagsList <a name="SagemakerPartnerAppTagsList" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

new sagemakerPartnerApp.SagemakerPartnerAppTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.get"></a>

```typescript
public get(index: number): SagemakerPartnerAppTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerPartnerAppTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>[]

---


### SagemakerPartnerAppTagsOutputReference <a name="SagemakerPartnerAppTagsOutputReference" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerPartnerApp } from '@cdktn/provider-awscc'

new sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerPartnerAppTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>

---



