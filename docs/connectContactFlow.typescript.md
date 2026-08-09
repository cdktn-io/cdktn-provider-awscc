# `connectContactFlow` Submodule <a name="`connectContactFlow` Submodule" id="@cdktn/provider-awscc.connectContactFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectContactFlow <a name="ConnectContactFlow" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow awscc_connect_contact_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.Initializer"></a>

```typescript
import { connectContactFlow } from '@cdktn/provider-awscc'

new connectContactFlow.ConnectContactFlow(scope: Construct, id: string, config: ConnectContactFlowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig">ConnectContactFlowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig">ConnectContactFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectContactFlowTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags">ConnectContactFlowTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectContactFlow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.isConstruct"></a>

```typescript
import { connectContactFlow } from '@cdktn/provider-awscc'

connectContactFlow.ConnectContactFlow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.isTerraformElement"></a>

```typescript
import { connectContactFlow } from '@cdktn/provider-awscc'

connectContactFlow.ConnectContactFlow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.isTerraformResource"></a>

```typescript
import { connectContactFlow } from '@cdktn/provider-awscc'

connectContactFlow.ConnectContactFlow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.generateConfigForImport"></a>

```typescript
import { connectContactFlow } from '@cdktn/provider-awscc'

connectContactFlow.ConnectContactFlow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectContactFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectContactFlow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectContactFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectContactFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList">ConnectContactFlowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags">ConnectContactFlowTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.tags"></a>

```typescript
public readonly tags: ConnectContactFlowTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList">ConnectContactFlowTagsList</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectContactFlowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags">ConnectContactFlowTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectContactFlowConfig <a name="ConnectContactFlowConfig" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.Initializer"></a>

```typescript
import { connectContactFlow } from '@cdktn/provider-awscc'

const connectContactFlowConfig: connectContactFlow.ConnectContactFlowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.content">content</a></code> | <code>string</code> | The content of the contact flow in JSON format. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance (ARN). |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.name">name</a></code> | <code>string</code> | The name of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.type">type</a></code> | <code>string</code> | The type of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.description">description</a></code> | <code>string</code> | The description of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.state">state</a></code> | <code>string</code> | The state of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags">ConnectContactFlowTags</a>[]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The content of the contact flow in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow#content ConnectContactFlow#content}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow#instance_arn ConnectContactFlow#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow#name ConnectContactFlow#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow#type ConnectContactFlow#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow#description ConnectContactFlow#description}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The state of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow#state ConnectContactFlow#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectContactFlowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags">ConnectContactFlowTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow#tags ConnectContactFlow#tags}

---

### ConnectContactFlowTags <a name="ConnectContactFlowTags" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags.Initializer"></a>

```typescript
import { connectContactFlow } from '@cdktn/provider-awscc'

const connectContactFlowTags: connectContactFlow.ConnectContactFlowTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow#key ConnectContactFlow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow#value ConnectContactFlow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectContactFlowTagsList <a name="ConnectContactFlowTagsList" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.Initializer"></a>

```typescript
import { connectContactFlow } from '@cdktn/provider-awscc'

new connectContactFlow.ConnectContactFlowTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.get"></a>

```typescript
public get(index: number): ConnectContactFlowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags">ConnectContactFlowTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectContactFlowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags">ConnectContactFlowTags</a>[]

---


### ConnectContactFlowTagsOutputReference <a name="ConnectContactFlowTagsOutputReference" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.Initializer"></a>

```typescript
import { connectContactFlow } from '@cdktn/provider-awscc'

new connectContactFlow.ConnectContactFlowTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags">ConnectContactFlowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectContactFlowTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectContactFlow.ConnectContactFlowTags">ConnectContactFlowTags</a>

---



