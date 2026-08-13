# `connectInstance` Submodule <a name="`connectInstance` Submodule" id="@cdktn/provider-awscc.connectInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstance <a name="ConnectInstance" id="@cdktn/provider-awscc.connectInstance.ConnectInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance awscc_connect_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer"></a>

```typescript
import { connectInstance } from '@cdktn/provider-awscc'

new connectInstance.ConnectInstance(scope: Construct, id: string, config: ConnectInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig">ConnectInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig">ConnectInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetInstanceAlias">resetInstanceAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes"></a>

```typescript
public putAttributes(value: ConnectInstanceAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectInstanceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]

---

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetDirectoryId"></a>

```typescript
public resetDirectoryId(): void
```

##### `resetInstanceAlias` <a name="resetInstanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetInstanceAlias"></a>

```typescript
public resetInstanceAlias(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct"></a>

```typescript
import { connectInstance } from '@cdktn/provider-awscc'

connectInstance.ConnectInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement"></a>

```typescript
import { connectInstance } from '@cdktn/provider-awscc'

connectInstance.ConnectInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource"></a>

```typescript
import { connectInstance } from '@cdktn/provider-awscc'

connectInstance.ConnectInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport"></a>

```typescript
import { connectInstance } from '@cdktn/provider-awscc'

connectInstance.ConnectInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference">ConnectInstanceAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceStatus">instanceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.serviceRole">serviceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList">ConnectInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementTypeInput">identityManagementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAliasInput">instanceAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementType">identityManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAlias">instanceAlias</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributes"></a>

```typescript
public readonly attributes: ConnectInstanceAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference">ConnectInstanceAttributesOutputReference</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `instanceStatus`<sup>Required</sup> <a name="instanceStatus" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceStatus"></a>

```typescript
public readonly instanceStatus: string;
```

- *Type:* string

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tags"></a>

```typescript
public readonly tags: ConnectInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList">ConnectInstanceTagsList</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | ConnectInstanceAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `identityManagementTypeInput`<sup>Optional</sup> <a name="identityManagementTypeInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementTypeInput"></a>

```typescript
public readonly identityManagementTypeInput: string;
```

- *Type:* string

---

##### `instanceAliasInput`<sup>Optional</sup> <a name="instanceAliasInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAliasInput"></a>

```typescript
public readonly instanceAliasInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `identityManagementType`<sup>Required</sup> <a name="identityManagementType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementType"></a>

```typescript
public readonly identityManagementType: string;
```

- *Type:* string

---

##### `instanceAlias`<sup>Required</sup> <a name="instanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAlias"></a>

```typescript
public readonly instanceAlias: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceAttributes <a name="ConnectInstanceAttributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.Initializer"></a>

```typescript
import { connectInstance } from '@cdktn/provider-awscc'

const connectInstanceAttributes: connectInstance.ConnectInstanceAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.inboundCalls">inboundCalls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Mandatory element which enables inbound calls on new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.outboundCalls">outboundCalls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Mandatory element which enables outbound calls on new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.autoResolveBestVoices">autoResolveBestVoices</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactflowLogs">contactflowLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag which enables CONTACTFLOW_LOGS on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactLens">contactLens</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag which enables CONTACT_LENS on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.earlyMedia">earlyMedia</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag which enables EARLY_MEDIA on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedChatMonitoring">enhancedChatMonitoring</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedContactMonitoring">enhancedContactMonitoring</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.highVolumeOutBound">highVolumeOutBound</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.messageStreaming">messageStreaming</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag which enables MESSAGE_STREAMING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyChatConference">multiPartyChatConference</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyConference">multiPartyConference</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.useCustomTtsVoices">useCustomTtsVoices</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance. |

---

##### `inboundCalls`<sup>Required</sup> <a name="inboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.inboundCalls"></a>

```typescript
public readonly inboundCalls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Mandatory element which enables inbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#inbound_calls ConnectInstance#inbound_calls}

---

##### `outboundCalls`<sup>Required</sup> <a name="outboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.outboundCalls"></a>

```typescript
public readonly outboundCalls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Mandatory element which enables outbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#outbound_calls ConnectInstance#outbound_calls}

---

##### `autoResolveBestVoices`<sup>Optional</sup> <a name="autoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.autoResolveBestVoices"></a>

```typescript
public readonly autoResolveBestVoices: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#auto_resolve_best_voices ConnectInstance#auto_resolve_best_voices}

---

##### `contactflowLogs`<sup>Optional</sup> <a name="contactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactflowLogs"></a>

```typescript
public readonly contactflowLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag which enables CONTACTFLOW_LOGS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#contactflow_logs ConnectInstance#contactflow_logs}

---

##### `contactLens`<sup>Optional</sup> <a name="contactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactLens"></a>

```typescript
public readonly contactLens: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag which enables CONTACT_LENS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#contact_lens ConnectInstance#contact_lens}

---

##### `earlyMedia`<sup>Optional</sup> <a name="earlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.earlyMedia"></a>

```typescript
public readonly earlyMedia: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag which enables EARLY_MEDIA on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#early_media ConnectInstance#early_media}

---

##### `enhancedChatMonitoring`<sup>Optional</sup> <a name="enhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedChatMonitoring"></a>

```typescript
public readonly enhancedChatMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#enhanced_chat_monitoring ConnectInstance#enhanced_chat_monitoring}

---

##### `enhancedContactMonitoring`<sup>Optional</sup> <a name="enhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedContactMonitoring"></a>

```typescript
public readonly enhancedContactMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#enhanced_contact_monitoring ConnectInstance#enhanced_contact_monitoring}

---

##### `highVolumeOutBound`<sup>Optional</sup> <a name="highVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.highVolumeOutBound"></a>

```typescript
public readonly highVolumeOutBound: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#high_volume_out_bound ConnectInstance#high_volume_out_bound}

---

##### `messageStreaming`<sup>Optional</sup> <a name="messageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.messageStreaming"></a>

```typescript
public readonly messageStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag which enables MESSAGE_STREAMING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#message_streaming ConnectInstance#message_streaming}

---

##### `multiPartyChatConference`<sup>Optional</sup> <a name="multiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyChatConference"></a>

```typescript
public readonly multiPartyChatConference: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#multi_party_chat_conference ConnectInstance#multi_party_chat_conference}

---

##### `multiPartyConference`<sup>Optional</sup> <a name="multiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyConference"></a>

```typescript
public readonly multiPartyConference: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#multi_party_conference ConnectInstance#multi_party_conference}

---

##### `useCustomTtsVoices`<sup>Optional</sup> <a name="useCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.useCustomTtsVoices"></a>

```typescript
public readonly useCustomTtsVoices: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#use_custom_tts_voices ConnectInstance#use_custom_tts_voices}

---

### ConnectInstanceConfig <a name="ConnectInstanceConfig" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.Initializer"></a>

```typescript
import { connectInstance } from '@cdktn/provider-awscc'

const connectInstanceConfig: connectInstance.ConnectInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | The attributes for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.identityManagementType">identityManagementType</a></code> | <code>string</code> | Specifies the type of directory integration for new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Existing directoryId user wants to map to the new Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.instanceAlias">instanceAlias</a></code> | <code>string</code> | Alias of the new directory created as part of new instance creation. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.attributes"></a>

```typescript
public readonly attributes: ConnectInstanceAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

The attributes for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#attributes ConnectInstance#attributes}

---

##### `identityManagementType`<sup>Required</sup> <a name="identityManagementType" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.identityManagementType"></a>

```typescript
public readonly identityManagementType: string;
```

- *Type:* string

Specifies the type of directory integration for new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#identity_management_type ConnectInstance#identity_management_type}

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Existing directoryId user wants to map to the new Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#directory_id ConnectInstance#directory_id}

---

##### `instanceAlias`<sup>Optional</sup> <a name="instanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.instanceAlias"></a>

```typescript
public readonly instanceAlias: string;
```

- *Type:* string

Alias of the new directory created as part of new instance creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#instance_alias ConnectInstance#instance_alias}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#tags ConnectInstance#tags}

---

### ConnectInstanceTags <a name="ConnectInstanceTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.Initializer"></a>

```typescript
import { connectInstance } from '@cdktn/provider-awscc'

const connectInstanceTags: connectInstance.ConnectInstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#key ConnectInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_instance#value ConnectInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceAttributesOutputReference <a name="ConnectInstanceAttributesOutputReference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer"></a>

```typescript
import { connectInstance } from '@cdktn/provider-awscc'

new connectInstance.ConnectInstanceAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetAutoResolveBestVoices">resetAutoResolveBestVoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactflowLogs">resetContactflowLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactLens">resetContactLens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEarlyMedia">resetEarlyMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedChatMonitoring">resetEnhancedChatMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedContactMonitoring">resetEnhancedContactMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetHighVolumeOutBound">resetHighVolumeOutBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMessageStreaming">resetMessageStreaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyChatConference">resetMultiPartyChatConference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyConference">resetMultiPartyConference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetUseCustomTtsVoices">resetUseCustomTtsVoices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoResolveBestVoices` <a name="resetAutoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetAutoResolveBestVoices"></a>

```typescript
public resetAutoResolveBestVoices(): void
```

##### `resetContactflowLogs` <a name="resetContactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactflowLogs"></a>

```typescript
public resetContactflowLogs(): void
```

##### `resetContactLens` <a name="resetContactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactLens"></a>

```typescript
public resetContactLens(): void
```

##### `resetEarlyMedia` <a name="resetEarlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEarlyMedia"></a>

```typescript
public resetEarlyMedia(): void
```

##### `resetEnhancedChatMonitoring` <a name="resetEnhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedChatMonitoring"></a>

```typescript
public resetEnhancedChatMonitoring(): void
```

##### `resetEnhancedContactMonitoring` <a name="resetEnhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedContactMonitoring"></a>

```typescript
public resetEnhancedContactMonitoring(): void
```

##### `resetHighVolumeOutBound` <a name="resetHighVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetHighVolumeOutBound"></a>

```typescript
public resetHighVolumeOutBound(): void
```

##### `resetMessageStreaming` <a name="resetMessageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMessageStreaming"></a>

```typescript
public resetMessageStreaming(): void
```

##### `resetMultiPartyChatConference` <a name="resetMultiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyChatConference"></a>

```typescript
public resetMultiPartyChatConference(): void
```

##### `resetMultiPartyConference` <a name="resetMultiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyConference"></a>

```typescript
public resetMultiPartyConference(): void
```

##### `resetUseCustomTtsVoices` <a name="resetUseCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetUseCustomTtsVoices"></a>

```typescript
public resetUseCustomTtsVoices(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoicesInput">autoResolveBestVoicesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogsInput">contactflowLogsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLensInput">contactLensInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMediaInput">earlyMediaInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoringInput">enhancedChatMonitoringInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoringInput">enhancedContactMonitoringInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBoundInput">highVolumeOutBoundInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCallsInput">inboundCallsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreamingInput">messageStreamingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConferenceInput">multiPartyChatConferenceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConferenceInput">multiPartyConferenceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCallsInput">outboundCallsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoicesInput">useCustomTtsVoicesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoices">autoResolveBestVoices</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogs">contactflowLogs</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLens">contactLens</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMedia">earlyMedia</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoring">enhancedChatMonitoring</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoring">enhancedContactMonitoring</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBound">highVolumeOutBound</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCalls">inboundCalls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreaming">messageStreaming</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConference">multiPartyChatConference</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConference">multiPartyConference</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCalls">outboundCalls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoices">useCustomTtsVoices</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoResolveBestVoicesInput`<sup>Optional</sup> <a name="autoResolveBestVoicesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoicesInput"></a>

```typescript
public readonly autoResolveBestVoicesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `contactflowLogsInput`<sup>Optional</sup> <a name="contactflowLogsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogsInput"></a>

```typescript
public readonly contactflowLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `contactLensInput`<sup>Optional</sup> <a name="contactLensInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLensInput"></a>

```typescript
public readonly contactLensInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `earlyMediaInput`<sup>Optional</sup> <a name="earlyMediaInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMediaInput"></a>

```typescript
public readonly earlyMediaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enhancedChatMonitoringInput`<sup>Optional</sup> <a name="enhancedChatMonitoringInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoringInput"></a>

```typescript
public readonly enhancedChatMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enhancedContactMonitoringInput`<sup>Optional</sup> <a name="enhancedContactMonitoringInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoringInput"></a>

```typescript
public readonly enhancedContactMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `highVolumeOutBoundInput`<sup>Optional</sup> <a name="highVolumeOutBoundInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBoundInput"></a>

```typescript
public readonly highVolumeOutBoundInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inboundCallsInput`<sup>Optional</sup> <a name="inboundCallsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCallsInput"></a>

```typescript
public readonly inboundCallsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `messageStreamingInput`<sup>Optional</sup> <a name="messageStreamingInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreamingInput"></a>

```typescript
public readonly messageStreamingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `multiPartyChatConferenceInput`<sup>Optional</sup> <a name="multiPartyChatConferenceInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConferenceInput"></a>

```typescript
public readonly multiPartyChatConferenceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `multiPartyConferenceInput`<sup>Optional</sup> <a name="multiPartyConferenceInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConferenceInput"></a>

```typescript
public readonly multiPartyConferenceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `outboundCallsInput`<sup>Optional</sup> <a name="outboundCallsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCallsInput"></a>

```typescript
public readonly outboundCallsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useCustomTtsVoicesInput`<sup>Optional</sup> <a name="useCustomTtsVoicesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoicesInput"></a>

```typescript
public readonly useCustomTtsVoicesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoResolveBestVoices`<sup>Required</sup> <a name="autoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoices"></a>

```typescript
public readonly autoResolveBestVoices: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `contactflowLogs`<sup>Required</sup> <a name="contactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogs"></a>

```typescript
public readonly contactflowLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `contactLens`<sup>Required</sup> <a name="contactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLens"></a>

```typescript
public readonly contactLens: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `earlyMedia`<sup>Required</sup> <a name="earlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMedia"></a>

```typescript
public readonly earlyMedia: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enhancedChatMonitoring`<sup>Required</sup> <a name="enhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoring"></a>

```typescript
public readonly enhancedChatMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enhancedContactMonitoring`<sup>Required</sup> <a name="enhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoring"></a>

```typescript
public readonly enhancedContactMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `highVolumeOutBound`<sup>Required</sup> <a name="highVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBound"></a>

```typescript
public readonly highVolumeOutBound: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inboundCalls`<sup>Required</sup> <a name="inboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCalls"></a>

```typescript
public readonly inboundCalls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `messageStreaming`<sup>Required</sup> <a name="messageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreaming"></a>

```typescript
public readonly messageStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `multiPartyChatConference`<sup>Required</sup> <a name="multiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConference"></a>

```typescript
public readonly multiPartyChatConference: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `multiPartyConference`<sup>Required</sup> <a name="multiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConference"></a>

```typescript
public readonly multiPartyConference: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `outboundCalls`<sup>Required</sup> <a name="outboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCalls"></a>

```typescript
public readonly outboundCalls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useCustomTtsVoices`<sup>Required</sup> <a name="useCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoices"></a>

```typescript
public readonly useCustomTtsVoices: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectInstanceAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---


### ConnectInstanceTagsList <a name="ConnectInstanceTagsList" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer"></a>

```typescript
import { connectInstance } from '@cdktn/provider-awscc'

new connectInstance.ConnectInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get"></a>

```typescript
public get(index: number): ConnectInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]

---


### ConnectInstanceTagsOutputReference <a name="ConnectInstanceTagsOutputReference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer"></a>

```typescript
import { connectInstance } from '@cdktn/provider-awscc'

new connectInstance.ConnectInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectInstanceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>

---



