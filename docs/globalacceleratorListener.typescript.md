# `globalacceleratorListener` Submodule <a name="`globalacceleratorListener` Submodule" id="@cdktn/provider-awscc.globalacceleratorListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorListener <a name="GlobalacceleratorListener" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener awscc_globalaccelerator_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-awscc'

new globalacceleratorListener.GlobalacceleratorListener(scope: Construct, id: string, config: GlobalacceleratorListenerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig">GlobalacceleratorListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig">GlobalacceleratorListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.putPortRanges">putPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetClientAffinity">resetClientAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPortRanges` <a name="putPortRanges" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.putPortRanges"></a>

```typescript
public putPortRanges(value: IResolvable | GlobalacceleratorListenerPortRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.putPortRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]

---

##### `resetClientAffinity` <a name="resetClientAffinity" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetClientAffinity"></a>

```typescript
public resetClientAffinity(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlobalacceleratorListener resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isConstruct"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-awscc'

globalacceleratorListener.GlobalacceleratorListener.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-awscc'

globalacceleratorListener.GlobalacceleratorListener.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-awscc'

globalacceleratorListener.GlobalacceleratorListener.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-awscc'

globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlobalacceleratorListener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalacceleratorListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalacceleratorListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.listenerArn">listenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.portRanges">portRanges</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList">GlobalacceleratorListenerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArnInput">acceleratorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinityInput">clientAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.portRangesInput">portRangesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArn">acceleratorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinity">clientAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.portRanges"></a>

```typescript
public readonly portRanges: GlobalacceleratorListenerPortRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList">GlobalacceleratorListenerPortRangesList</a>

---

##### `acceleratorArnInput`<sup>Optional</sup> <a name="acceleratorArnInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArnInput"></a>

```typescript
public readonly acceleratorArnInput: string;
```

- *Type:* string

---

##### `clientAffinityInput`<sup>Optional</sup> <a name="clientAffinityInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinityInput"></a>

```typescript
public readonly clientAffinityInput: string;
```

- *Type:* string

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.portRangesInput"></a>

```typescript
public readonly portRangesInput: IResolvable | GlobalacceleratorListenerPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `acceleratorArn`<sup>Required</sup> <a name="acceleratorArn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArn"></a>

```typescript
public readonly acceleratorArn: string;
```

- *Type:* string

---

##### `clientAffinity`<sup>Required</sup> <a name="clientAffinity" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinity"></a>

```typescript
public readonly clientAffinity: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorListenerConfig <a name="GlobalacceleratorListenerConfig" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-awscc'

const globalacceleratorListenerConfig: globalacceleratorListener.GlobalacceleratorListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.acceleratorArn">acceleratorArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the accelerator. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.portRanges">portRanges</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#port_ranges GlobalacceleratorListener#port_ranges}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.clientAffinity">clientAffinity</a></code> | <code>string</code> | Client affinity lets you direct all requests from a user to the same endpoint. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.protocol">protocol</a></code> | <code>string</code> | The protocol for the listener. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `acceleratorArn`<sup>Required</sup> <a name="acceleratorArn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.acceleratorArn"></a>

```typescript
public readonly acceleratorArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#accelerator_arn GlobalacceleratorListener#accelerator_arn}

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.portRanges"></a>

```typescript
public readonly portRanges: IResolvable | GlobalacceleratorListenerPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#port_ranges GlobalacceleratorListener#port_ranges}.

---

##### `clientAffinity`<sup>Optional</sup> <a name="clientAffinity" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.clientAffinity"></a>

```typescript
public readonly clientAffinity: string;
```

- *Type:* string

Client affinity lets you direct all requests from a user to the same endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#client_affinity GlobalacceleratorListener#client_affinity}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol for the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#protocol GlobalacceleratorListener#protocol}

---

### GlobalacceleratorListenerPortRanges <a name="GlobalacceleratorListenerPortRanges" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-awscc'

const globalacceleratorListenerPortRanges: globalacceleratorListener.GlobalacceleratorListenerPortRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges.property.fromPort">fromPort</a></code> | <code>number</code> | A network port number. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges.property.toPort">toPort</a></code> | <code>number</code> | A network port number. |

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

A network port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#from_port GlobalacceleratorListener#from_port}

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

A network port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#to_port GlobalacceleratorListener#to_port}

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorListenerPortRangesList <a name="GlobalacceleratorListenerPortRangesList" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-awscc'

new globalacceleratorListener.GlobalacceleratorListenerPortRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.get"></a>

```typescript
public get(index: number): GlobalacceleratorListenerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorListenerPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]

---


### GlobalacceleratorListenerPortRangesOutputReference <a name="GlobalacceleratorListenerPortRangesOutputReference" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer"></a>

```typescript
import { globalacceleratorListener } from '@cdktn/provider-awscc'

new globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorListenerPortRanges;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>

---



