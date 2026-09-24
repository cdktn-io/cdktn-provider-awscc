# `mgnConnector` Submodule <a name="`mgnConnector` Submodule" id="@cdktn/provider-awscc.mgnConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MgnConnector <a name="MgnConnector" id="@cdktn/provider-awscc.mgnConnector.MgnConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector awscc_mgn_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer"></a>

```typescript
import { mgnConnector } from '@cdktn/provider-awscc'

new mgnConnector.MgnConnector(scope: Construct, id: string, config: MgnConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig">MgnConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig">MgnConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.putSsmCommandConfig">putSsmCommandConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.resetSsmCommandConfig">resetSsmCommandConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSsmCommandConfig` <a name="putSsmCommandConfig" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.putSsmCommandConfig"></a>

```typescript
public putSsmCommandConfig(value: MgnConnectorSsmCommandConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.putSsmCommandConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.putTags"></a>

```typescript
public putTags(value: IResolvable | MgnConnectorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>[]

---

##### `resetSsmCommandConfig` <a name="resetSsmCommandConfig" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.resetSsmCommandConfig"></a>

```typescript
public resetSsmCommandConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MgnConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isConstruct"></a>

```typescript
import { mgnConnector } from '@cdktn/provider-awscc'

mgnConnector.MgnConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformElement"></a>

```typescript
import { mgnConnector } from '@cdktn/provider-awscc'

mgnConnector.MgnConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformResource"></a>

```typescript
import { mgnConnector } from '@cdktn/provider-awscc'

mgnConnector.MgnConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport"></a>

```typescript
import { mgnConnector } from '@cdktn/provider-awscc'

mgnConnector.MgnConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MgnConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MgnConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MgnConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MgnConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmCommandConfig">ssmCommandConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference">MgnConnectorSsmCommandConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList">MgnConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmCommandConfigInput">ssmCommandConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmInstanceIdInput">ssmInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmInstanceId">ssmInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ssmCommandConfig`<sup>Required</sup> <a name="ssmCommandConfig" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmCommandConfig"></a>

```typescript
public readonly ssmCommandConfig: MgnConnectorSsmCommandConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference">MgnConnectorSsmCommandConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tags"></a>

```typescript
public readonly tags: MgnConnectorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList">MgnConnectorTagsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ssmCommandConfigInput`<sup>Optional</sup> <a name="ssmCommandConfigInput" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmCommandConfigInput"></a>

```typescript
public readonly ssmCommandConfigInput: IResolvable | MgnConnectorSsmCommandConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a>

---

##### `ssmInstanceIdInput`<sup>Optional</sup> <a name="ssmInstanceIdInput" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmInstanceIdInput"></a>

```typescript
public readonly ssmInstanceIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MgnConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ssmInstanceId`<sup>Required</sup> <a name="ssmInstanceId" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmInstanceId"></a>

```typescript
public readonly ssmInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MgnConnectorConfig <a name="MgnConnectorConfig" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.Initializer"></a>

```typescript
import { mgnConnector } from '@cdktn/provider-awscc'

const mgnConnectorConfig: mgnConnector.MgnConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.name">name</a></code> | <code>string</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.ssmInstanceId">ssmInstanceId</a></code> | <code>string</code> | The SSM instance ID associated with this connector. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.ssmCommandConfig">ssmCommandConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a></code> | SSM command configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>[]</code> | Tags to assign to the connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#name MgnConnector#name}

---

##### `ssmInstanceId`<sup>Required</sup> <a name="ssmInstanceId" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.ssmInstanceId"></a>

```typescript
public readonly ssmInstanceId: string;
```

- *Type:* string

The SSM instance ID associated with this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#ssm_instance_id MgnConnector#ssm_instance_id}

---

##### `ssmCommandConfig`<sup>Optional</sup> <a name="ssmCommandConfig" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.ssmCommandConfig"></a>

```typescript
public readonly ssmCommandConfig: MgnConnectorSsmCommandConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a>

SSM command configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#ssm_command_config MgnConnector#ssm_command_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MgnConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>[]

Tags to assign to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#tags MgnConnector#tags}

---

### MgnConnectorSsmCommandConfig <a name="MgnConnectorSsmCommandConfig" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.Initializer"></a>

```typescript
import { mgnConnector } from '@cdktn/provider-awscc'

const mgnConnectorSsmCommandConfig: mgnConnector.MgnConnectorSsmCommandConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.cloudwatchLogGroupName">cloudwatchLogGroupName</a></code> | <code>string</code> | The CloudWatch Logs group name for SSM command output. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.cloudwatchOutputEnabled">cloudwatchOutputEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether SSM command output is sent to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.outputS3BucketName">outputS3BucketName</a></code> | <code>string</code> | The S3 bucket name for SSM command output. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.s3OutputEnabled">s3OutputEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether SSM command output is stored in S3. |

---

##### `cloudwatchLogGroupName`<sup>Optional</sup> <a name="cloudwatchLogGroupName" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.cloudwatchLogGroupName"></a>

```typescript
public readonly cloudwatchLogGroupName: string;
```

- *Type:* string

The CloudWatch Logs group name for SSM command output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#cloudwatch_log_group_name MgnConnector#cloudwatch_log_group_name}

---

##### `cloudwatchOutputEnabled`<sup>Optional</sup> <a name="cloudwatchOutputEnabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.cloudwatchOutputEnabled"></a>

```typescript
public readonly cloudwatchOutputEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether SSM command output is sent to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#cloudwatch_output_enabled MgnConnector#cloudwatch_output_enabled}

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="outputS3BucketName" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.outputS3BucketName"></a>

```typescript
public readonly outputS3BucketName: string;
```

- *Type:* string

The S3 bucket name for SSM command output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#output_s3_bucket_name MgnConnector#output_s3_bucket_name}

---

##### `s3OutputEnabled`<sup>Optional</sup> <a name="s3OutputEnabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.s3OutputEnabled"></a>

```typescript
public readonly s3OutputEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether SSM command output is stored in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#s3_output_enabled MgnConnector#s3_output_enabled}

---

### MgnConnectorTags <a name="MgnConnectorTags" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTags.Initializer"></a>

```typescript
import { mgnConnector } from '@cdktn/provider-awscc'

const mgnConnectorTags: mgnConnector.MgnConnectorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#key MgnConnector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#value MgnConnector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MgnConnectorSsmCommandConfigOutputReference <a name="MgnConnectorSsmCommandConfigOutputReference" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.Initializer"></a>

```typescript
import { mgnConnector } from '@cdktn/provider-awscc'

new mgnConnector.MgnConnectorSsmCommandConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetCloudwatchLogGroupName">resetCloudwatchLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetCloudwatchOutputEnabled">resetCloudwatchOutputEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetOutputS3BucketName">resetOutputS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetS3OutputEnabled">resetS3OutputEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogGroupName` <a name="resetCloudwatchLogGroupName" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetCloudwatchLogGroupName"></a>

```typescript
public resetCloudwatchLogGroupName(): void
```

##### `resetCloudwatchOutputEnabled` <a name="resetCloudwatchOutputEnabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetCloudwatchOutputEnabled"></a>

```typescript
public resetCloudwatchOutputEnabled(): void
```

##### `resetOutputS3BucketName` <a name="resetOutputS3BucketName" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetOutputS3BucketName"></a>

```typescript
public resetOutputS3BucketName(): void
```

##### `resetS3OutputEnabled` <a name="resetS3OutputEnabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetS3OutputEnabled"></a>

```typescript
public resetS3OutputEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchLogGroupNameInput">cloudwatchLogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchOutputEnabledInput">cloudwatchOutputEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.outputS3BucketNameInput">outputS3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.s3OutputEnabledInput">s3OutputEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchLogGroupName">cloudwatchLogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchOutputEnabled">cloudwatchOutputEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.outputS3BucketName">outputS3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.s3OutputEnabled">s3OutputEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupNameInput`<sup>Optional</sup> <a name="cloudwatchLogGroupNameInput" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchLogGroupNameInput"></a>

```typescript
public readonly cloudwatchLogGroupNameInput: string;
```

- *Type:* string

---

##### `cloudwatchOutputEnabledInput`<sup>Optional</sup> <a name="cloudwatchOutputEnabledInput" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchOutputEnabledInput"></a>

```typescript
public readonly cloudwatchOutputEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `outputS3BucketNameInput`<sup>Optional</sup> <a name="outputS3BucketNameInput" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.outputS3BucketNameInput"></a>

```typescript
public readonly outputS3BucketNameInput: string;
```

- *Type:* string

---

##### `s3OutputEnabledInput`<sup>Optional</sup> <a name="s3OutputEnabledInput" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.s3OutputEnabledInput"></a>

```typescript
public readonly s3OutputEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cloudwatchLogGroupName`<sup>Required</sup> <a name="cloudwatchLogGroupName" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchLogGroupName"></a>

```typescript
public readonly cloudwatchLogGroupName: string;
```

- *Type:* string

---

##### `cloudwatchOutputEnabled`<sup>Required</sup> <a name="cloudwatchOutputEnabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchOutputEnabled"></a>

```typescript
public readonly cloudwatchOutputEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `outputS3BucketName`<sup>Required</sup> <a name="outputS3BucketName" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.outputS3BucketName"></a>

```typescript
public readonly outputS3BucketName: string;
```

- *Type:* string

---

##### `s3OutputEnabled`<sup>Required</sup> <a name="s3OutputEnabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.s3OutputEnabled"></a>

```typescript
public readonly s3OutputEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnConnectorSsmCommandConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a>

---


### MgnConnectorTagsList <a name="MgnConnectorTagsList" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer"></a>

```typescript
import { mgnConnector } from '@cdktn/provider-awscc'

new mgnConnector.MgnConnectorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.get"></a>

```typescript
public get(index: number): MgnConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>[]

---


### MgnConnectorTagsOutputReference <a name="MgnConnectorTagsOutputReference" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer"></a>

```typescript
import { mgnConnector } from '@cdktn/provider-awscc'

new mgnConnector.MgnConnectorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnConnectorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>

---



