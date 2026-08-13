# `cloudformationResourceVersion` Submodule <a name="`cloudformationResourceVersion` Submodule" id="@cdktn/provider-awscc.cloudformationResourceVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationResourceVersion <a name="CloudformationResourceVersion" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_resource_version awscc_cloudformation_resource_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer"></a>

```typescript
import { cloudformationResourceVersion } from '@cdktn/provider-awscc'

new cloudformationResourceVersion.CloudformationResourceVersion(scope: Construct, id: string, config: CloudformationResourceVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig">CloudformationResourceVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig">CloudformationResourceVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: CloudformationResourceVersionLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig">CloudformationResourceVersionLoggingConfig</a>

---

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationResourceVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isConstruct"></a>

```typescript
import { cloudformationResourceVersion } from '@cdktn/provider-awscc'

cloudformationResourceVersion.CloudformationResourceVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformElement"></a>

```typescript
import { cloudformationResourceVersion } from '@cdktn/provider-awscc'

cloudformationResourceVersion.CloudformationResourceVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformResource"></a>

```typescript
import { cloudformationResourceVersion } from '@cdktn/provider-awscc'

cloudformationResourceVersion.CloudformationResourceVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport"></a>

```typescript
import { cloudformationResourceVersion } from '@cdktn/provider-awscc'

cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudformationResourceVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationResourceVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationResourceVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_resource_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationResourceVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.isDefaultVersion">isDefaultVersion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference">CloudformationResourceVersionLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provisioningType">provisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeArn">typeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.loggingConfigInput">loggingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig">CloudformationResourceVersionLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.schemaHandlerPackageInput">schemaHandlerPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.schemaHandlerPackage">schemaHandlerPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefaultVersion`<sup>Required</sup> <a name="isDefaultVersion" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.isDefaultVersion"></a>

```typescript
public readonly isDefaultVersion: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: CloudformationResourceVersionLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference">CloudformationResourceVersionLoggingConfigOutputReference</a>

---

##### `provisioningType`<sup>Required</sup> <a name="provisioningType" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provisioningType"></a>

```typescript
public readonly provisioningType: string;
```

- *Type:* string

---

##### `typeArn`<sup>Required</sup> <a name="typeArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeArn"></a>

```typescript
public readonly typeArn: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: IResolvable | CloudformationResourceVersionLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig">CloudformationResourceVersionLoggingConfig</a>

---

##### `schemaHandlerPackageInput`<sup>Optional</sup> <a name="schemaHandlerPackageInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.schemaHandlerPackageInput"></a>

```typescript
public readonly schemaHandlerPackageInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `schemaHandlerPackage`<sup>Required</sup> <a name="schemaHandlerPackage" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.schemaHandlerPackage"></a>

```typescript
public readonly schemaHandlerPackage: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationResourceVersionConfig <a name="CloudformationResourceVersionConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.Initializer"></a>

```typescript
import { cloudformationResourceVersion } from '@cdktn/provider-awscc'

const cloudformationResourceVersionConfig: cloudformationResourceVersion.CloudformationResourceVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.schemaHandlerPackage">schemaHandlerPackage</a></code> | <code>string</code> | A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.typeName">typeName</a></code> | <code>string</code> | The name of the type being registered. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig">CloudformationResourceVersionLoggingConfig</a></code> | Specifies logging configuration information for a type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `schemaHandlerPackage`<sup>Required</sup> <a name="schemaHandlerPackage" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.schemaHandlerPackage"></a>

```typescript
public readonly schemaHandlerPackage: string;
```

- *Type:* string

A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.

For information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_resource_version#schema_handler_package CloudformationResourceVersion#schema_handler_package}

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_resource_version#type_name CloudformationResourceVersion#type_name}

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM execution role to use to register the type.

If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_resource_version#execution_role_arn CloudformationResourceVersion#execution_role_arn}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: CloudformationResourceVersionLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig">CloudformationResourceVersionLoggingConfig</a>

Specifies logging configuration information for a type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_resource_version#logging_config CloudformationResourceVersion#logging_config}

---

### CloudformationResourceVersionLoggingConfig <a name="CloudformationResourceVersionLoggingConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig.Initializer"></a>

```typescript
import { cloudformationResourceVersion } from '@cdktn/provider-awscc'

const cloudformationResourceVersionLoggingConfig: cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig.property.logGroupName">logGroupName</a></code> | <code>string</code> | The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig.property.logRoleArn">logRoleArn</a></code> | <code>string</code> | The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs. |

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_resource_version#log_group_name CloudformationResourceVersion#log_group_name}

---

##### `logRoleArn`<sup>Optional</sup> <a name="logRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig.property.logRoleArn"></a>

```typescript
public readonly logRoleArn: string;
```

- *Type:* string

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_resource_version#log_role_arn CloudformationResourceVersion#log_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationResourceVersionLoggingConfigOutputReference <a name="CloudformationResourceVersionLoggingConfigOutputReference" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.Initializer"></a>

```typescript
import { cloudformationResourceVersion } from '@cdktn/provider-awscc'

new cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resetLogRoleArn">resetLogRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resetLogGroupName"></a>

```typescript
public resetLogGroupName(): void
```

##### `resetLogRoleArn` <a name="resetLogRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resetLogRoleArn"></a>

```typescript
public resetLogRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logRoleArnInput">logRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logRoleArn">logRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig">CloudformationResourceVersionLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `logRoleArnInput`<sup>Optional</sup> <a name="logRoleArnInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logRoleArnInput"></a>

```typescript
public readonly logRoleArnInput: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `logRoleArn`<sup>Required</sup> <a name="logRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logRoleArn"></a>

```typescript
public readonly logRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationResourceVersionLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig">CloudformationResourceVersionLoggingConfig</a>

---



