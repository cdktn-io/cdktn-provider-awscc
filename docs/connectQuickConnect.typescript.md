# `connectQuickConnect` Submodule <a name="`connectQuickConnect` Submodule" id="@cdktn/provider-awscc.connectQuickConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectQuickConnect <a name="ConnectQuickConnect" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect awscc_connect_quick_connect}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

new connectQuickConnect.ConnectQuickConnect(scope: Construct, id: string, config: ConnectQuickConnectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig">ConnectQuickConnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig">ConnectQuickConnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig">putQuickConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQuickConnectConfig` <a name="putQuickConnectConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig"></a>

```typescript
public putQuickConnectConfig(value: ConnectQuickConnectQuickConnectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectQuickConnectTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectQuickConnect resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isConstruct"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

connectQuickConnect.ConnectQuickConnect.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformElement"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

connectQuickConnect.ConnectQuickConnect.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformResource"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

connectQuickConnect.ConnectQuickConnect.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

connectQuickConnect.ConnectQuickConnect.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectQuickConnect resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectQuickConnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectQuickConnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectQuickConnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectArn">quickConnectArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfig">quickConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference">ConnectQuickConnectQuickConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectType">quickConnectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList">ConnectQuickConnectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfigInput">quickConnectConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `quickConnectArn`<sup>Required</sup> <a name="quickConnectArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectArn"></a>

```typescript
public readonly quickConnectArn: string;
```

- *Type:* string

---

##### `quickConnectConfig`<sup>Required</sup> <a name="quickConnectConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfig"></a>

```typescript
public readonly quickConnectConfig: ConnectQuickConnectQuickConnectConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference">ConnectQuickConnectQuickConnectConfigOutputReference</a>

---

##### `quickConnectType`<sup>Required</sup> <a name="quickConnectType" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectType"></a>

```typescript
public readonly quickConnectType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tags"></a>

```typescript
public readonly tags: ConnectQuickConnectTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList">ConnectQuickConnectTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `quickConnectConfigInput`<sup>Optional</sup> <a name="quickConnectConfigInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfigInput"></a>

```typescript
public readonly quickConnectConfigInput: IResolvable | ConnectQuickConnectQuickConnectConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectQuickConnectTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectQuickConnectConfig <a name="ConnectQuickConnectConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

const connectQuickConnectConfig: connectQuickConnect.ConnectQuickConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.name">name</a></code> | <code>string</code> | The name of the quick connect. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.quickConnectConfig">quickConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | Configuration settings for the quick connect. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.description">description</a></code> | <code>string</code> | The description of the quick connect. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>[]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#instance_arn ConnectQuickConnect#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the quick connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#name ConnectQuickConnect#name}

---

##### `quickConnectConfig`<sup>Required</sup> <a name="quickConnectConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.quickConnectConfig"></a>

```typescript
public readonly quickConnectConfig: ConnectQuickConnectQuickConnectConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

Configuration settings for the quick connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#quick_connect_config ConnectQuickConnect#quick_connect_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the quick connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#description ConnectQuickConnect#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectQuickConnectTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#tags ConnectQuickConnect#tags}

---

### ConnectQuickConnectQuickConnectConfig <a name="ConnectQuickConnectQuickConnectConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

const connectQuickConnectQuickConnectConfig: connectQuickConnect.ConnectQuickConnectQuickConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.quickConnectType">quickConnectType</a></code> | <code>string</code> | The type of quick connect. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.flowConfig">flowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a></code> | The flow configuration. This is required only if QuickConnectType is FLOW. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a></code> | The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.queueConfig">queueConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a></code> | The queue configuration. This is required only if QuickConnectType is QUEUE. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.userConfig">userConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a></code> | The user configuration. This is required only if QuickConnectType is USER. |

---

##### `quickConnectType`<sup>Required</sup> <a name="quickConnectType" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.quickConnectType"></a>

```typescript
public readonly quickConnectType: string;
```

- *Type:* string

The type of quick connect.

In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}

---

##### `flowConfig`<sup>Optional</sup> <a name="flowConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.flowConfig"></a>

```typescript
public readonly flowConfig: ConnectQuickConnectQuickConnectConfigFlowConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a>

The flow configuration. This is required only if QuickConnectType is FLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#flow_config ConnectQuickConnect#flow_config}

---

##### `phoneConfig`<sup>Optional</sup> <a name="phoneConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: ConnectQuickConnectQuickConnectConfigPhoneConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>

The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#phone_config ConnectQuickConnect#phone_config}

---

##### `queueConfig`<sup>Optional</sup> <a name="queueConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.queueConfig"></a>

```typescript
public readonly queueConfig: ConnectQuickConnectQuickConnectConfigQueueConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>

The queue configuration. This is required only if QuickConnectType is QUEUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#queue_config ConnectQuickConnect#queue_config}

---

##### `userConfig`<sup>Optional</sup> <a name="userConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.userConfig"></a>

```typescript
public readonly userConfig: ConnectQuickConnectQuickConnectConfigUserConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>

The user configuration. This is required only if QuickConnectType is USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#user_config ConnectQuickConnect#user_config}

---

### ConnectQuickConnectQuickConnectConfigFlowConfig <a name="ConnectQuickConnectQuickConnectConfigFlowConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

const connectQuickConnectQuickConnectConfigFlowConfig: connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | The identifier of the contact flow. |

---

##### `contactFlowArn`<sup>Optional</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#contact_flow_arn ConnectQuickConnect#contact_flow_arn}

---

### ConnectQuickConnectQuickConnectConfigPhoneConfig <a name="ConnectQuickConnectQuickConnectConfigPhoneConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

const connectQuickConnectQuickConnectConfigPhoneConfig: connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | The phone number in E.164 format. |

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

The phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#phone_number ConnectQuickConnect#phone_number}

---

### ConnectQuickConnectQuickConnectConfigQueueConfig <a name="ConnectQuickConnectQuickConnectConfigQueueConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

const connectQuickConnectQuickConnectConfigQueueConfig: connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.queueArn">queueArn</a></code> | <code>string</code> | The identifier for the queue. |

---

##### `contactFlowArn`<sup>Optional</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#contact_flow_arn ConnectQuickConnect#contact_flow_arn}

---

##### `queueArn`<sup>Optional</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

The identifier for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#queue_arn ConnectQuickConnect#queue_arn}

---

### ConnectQuickConnectQuickConnectConfigUserConfig <a name="ConnectQuickConnectQuickConnectConfigUserConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

const connectQuickConnectQuickConnectConfigUserConfig: connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.userArn">userArn</a></code> | <code>string</code> | The identifier of the user. |

---

##### `contactFlowArn`<sup>Optional</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#contact_flow_arn ConnectQuickConnect#contact_flow_arn}

---

##### `userArn`<sup>Optional</sup> <a name="userArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

The identifier of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#user_arn ConnectQuickConnect#user_arn}

---

### ConnectQuickConnectTags <a name="ConnectQuickConnectTags" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

const connectQuickConnectTags: connectQuickConnect.ConnectQuickConnectTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#key ConnectQuickConnect#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_quick_connect#value ConnectQuickConnect#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.resetContactFlowArn">resetContactFlowArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactFlowArn` <a name="resetContactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.resetContactFlowArn"></a>

```typescript
public resetContactFlowArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.contactFlowArnInput">contactFlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactFlowArnInput`<sup>Optional</sup> <a name="contactFlowArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.contactFlowArnInput"></a>

```typescript
public readonly contactFlowArnInput: string;
```

- *Type:* string

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQuickConnectQuickConnectConfigFlowConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a>

---


### ConnectQuickConnectQuickConnectConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putFlowConfig">putFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig">putPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig">putQueueConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig">putUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetFlowConfig">resetFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetPhoneConfig">resetPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetQueueConfig">resetQueueConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetUserConfig">resetUserConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlowConfig` <a name="putFlowConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putFlowConfig"></a>

```typescript
public putFlowConfig(value: ConnectQuickConnectQuickConnectConfigFlowConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putFlowConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a>

---

##### `putPhoneConfig` <a name="putPhoneConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig"></a>

```typescript
public putPhoneConfig(value: ConnectQuickConnectQuickConnectConfigPhoneConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>

---

##### `putQueueConfig` <a name="putQueueConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig"></a>

```typescript
public putQueueConfig(value: ConnectQuickConnectQuickConnectConfigQueueConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>

---

##### `putUserConfig` <a name="putUserConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig"></a>

```typescript
public putUserConfig(value: ConnectQuickConnectQuickConnectConfigUserConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>

---

##### `resetFlowConfig` <a name="resetFlowConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetFlowConfig"></a>

```typescript
public resetFlowConfig(): void
```

##### `resetPhoneConfig` <a name="resetPhoneConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetPhoneConfig"></a>

```typescript
public resetPhoneConfig(): void
```

##### `resetQueueConfig` <a name="resetQueueConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetQueueConfig"></a>

```typescript
public resetQueueConfig(): void
```

##### `resetUserConfig` <a name="resetUserConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetUserConfig"></a>

```typescript
public resetUserConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.flowConfig">flowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference">ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference">ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig">queueConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference">ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig">userConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference">ConnectQuickConnectQuickConnectConfigUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.flowConfigInput">flowConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfigInput">phoneConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfigInput">queueConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectTypeInput">quickConnectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfigInput">userConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType">quickConnectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowConfig`<sup>Required</sup> <a name="flowConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.flowConfig"></a>

```typescript
public readonly flowConfig: ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference">ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference</a>

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference">ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference</a>

---

##### `queueConfig`<sup>Required</sup> <a name="queueConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig"></a>

```typescript
public readonly queueConfig: ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference">ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference</a>

---

##### `userConfig`<sup>Required</sup> <a name="userConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig"></a>

```typescript
public readonly userConfig: ConnectQuickConnectQuickConnectConfigUserConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference">ConnectQuickConnectQuickConnectConfigUserConfigOutputReference</a>

---

##### `flowConfigInput`<sup>Optional</sup> <a name="flowConfigInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.flowConfigInput"></a>

```typescript
public readonly flowConfigInput: IResolvable | ConnectQuickConnectQuickConnectConfigFlowConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a>

---

##### `phoneConfigInput`<sup>Optional</sup> <a name="phoneConfigInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfigInput"></a>

```typescript
public readonly phoneConfigInput: IResolvable | ConnectQuickConnectQuickConnectConfigPhoneConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>

---

##### `queueConfigInput`<sup>Optional</sup> <a name="queueConfigInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfigInput"></a>

```typescript
public readonly queueConfigInput: IResolvable | ConnectQuickConnectQuickConnectConfigQueueConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>

---

##### `quickConnectTypeInput`<sup>Optional</sup> <a name="quickConnectTypeInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectTypeInput"></a>

```typescript
public readonly quickConnectTypeInput: string;
```

- *Type:* string

---

##### `userConfigInput`<sup>Optional</sup> <a name="userConfigInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfigInput"></a>

```typescript
public readonly userConfigInput: IResolvable | ConnectQuickConnectQuickConnectConfigUserConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>

---

##### `quickConnectType`<sup>Required</sup> <a name="quickConnectType" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType"></a>

```typescript
public readonly quickConnectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQuickConnectQuickConnectConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---


### ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQuickConnectQuickConnectConfigPhoneConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>

---


### ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resetContactFlowArn">resetContactFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resetQueueArn">resetQueueArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactFlowArn` <a name="resetContactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resetContactFlowArn"></a>

```typescript
public resetContactFlowArn(): void
```

##### `resetQueueArn` <a name="resetQueueArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resetQueueArn"></a>

```typescript
public resetQueueArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowArnInput">contactFlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueArnInput">queueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueArn">queueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactFlowArnInput`<sup>Optional</sup> <a name="contactFlowArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowArnInput"></a>

```typescript
public readonly contactFlowArnInput: string;
```

- *Type:* string

---

##### `queueArnInput`<sup>Optional</sup> <a name="queueArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueArnInput"></a>

```typescript
public readonly queueArnInput: string;
```

- *Type:* string

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQuickConnectQuickConnectConfigQueueConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>

---


### ConnectQuickConnectQuickConnectConfigUserConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigUserConfigOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

new connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resetContactFlowArn">resetContactFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resetUserArn">resetUserArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactFlowArn` <a name="resetContactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resetContactFlowArn"></a>

```typescript
public resetContactFlowArn(): void
```

##### `resetUserArn` <a name="resetUserArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resetUserArn"></a>

```typescript
public resetUserArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowArnInput">contactFlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userArnInput">userArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowArn">contactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userArn">userArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactFlowArnInput`<sup>Optional</sup> <a name="contactFlowArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowArnInput"></a>

```typescript
public readonly contactFlowArnInput: string;
```

- *Type:* string

---

##### `userArnInput`<sup>Optional</sup> <a name="userArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userArnInput"></a>

```typescript
public readonly userArnInput: string;
```

- *Type:* string

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowArn"></a>

```typescript
public readonly contactFlowArn: string;
```

- *Type:* string

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQuickConnectQuickConnectConfigUserConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>

---


### ConnectQuickConnectTagsList <a name="ConnectQuickConnectTagsList" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

new connectQuickConnect.ConnectQuickConnectTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.get"></a>

```typescript
public get(index: number): ConnectQuickConnectTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQuickConnectTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>[]

---


### ConnectQuickConnectTagsOutputReference <a name="ConnectQuickConnectTagsOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer"></a>

```typescript
import { connectQuickConnect } from '@cdktn/provider-awscc'

new connectQuickConnect.ConnectQuickConnectTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectQuickConnectTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>

---



