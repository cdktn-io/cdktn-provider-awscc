# `chimeAppInstance` Submodule <a name="`chimeAppInstance` Submodule" id="@cdktn/provider-awscc.chimeAppInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeAppInstance <a name="ChimeAppInstance" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chime_app_instance awscc_chime_app_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.Initializer"></a>

```typescript
import { chimeAppInstance } from '@cdktn/provider-awscc'

new chimeAppInstance.ChimeAppInstance(scope: Construct, id: string, config: ChimeAppInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig">ChimeAppInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig">ChimeAppInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.putTags"></a>

```typescript
public putTags(value: IResolvable | ChimeAppInstanceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags">ChimeAppInstanceTags</a>[]

---

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeAppInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.isConstruct"></a>

```typescript
import { chimeAppInstance } from '@cdktn/provider-awscc'

chimeAppInstance.ChimeAppInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.isTerraformElement"></a>

```typescript
import { chimeAppInstance } from '@cdktn/provider-awscc'

chimeAppInstance.ChimeAppInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.isTerraformResource"></a>

```typescript
import { chimeAppInstance } from '@cdktn/provider-awscc'

chimeAppInstance.ChimeAppInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.generateConfigForImport"></a>

```typescript
import { chimeAppInstance } from '@cdktn/provider-awscc'

chimeAppInstance.ChimeAppInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChimeAppInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeAppInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeAppInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chime_app_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeAppInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.createdTimestamp">createdTimestamp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList">ChimeAppInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags">ChimeAppInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.tags"></a>

```typescript
public readonly tags: ChimeAppInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList">ChimeAppInstanceTagsList</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ChimeAppInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags">ChimeAppInstanceTags</a>[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeAppInstanceConfig <a name="ChimeAppInstanceConfig" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.Initializer"></a>

```typescript
import { chimeAppInstance } from '@cdktn/provider-awscc'

const chimeAppInstanceConfig: chimeAppInstance.ChimeAppInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.name">name</a></code> | <code>string</code> | The name of the AppInstance. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.metadata">metadata</a></code> | <code>string</code> | The metadata of the AppInstance. Limited to a 1KB string in UTF-8. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags">ChimeAppInstanceTags</a>[]</code> | Tags assigned to the AppInstance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the AppInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chime_app_instance#name ChimeAppInstance#name}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

The metadata of the AppInstance. Limited to a 1KB string in UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chime_app_instance#metadata ChimeAppInstance#metadata}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ChimeAppInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags">ChimeAppInstanceTags</a>[]

Tags assigned to the AppInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chime_app_instance#tags ChimeAppInstance#tags}

---

### ChimeAppInstanceTags <a name="ChimeAppInstanceTags" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags.Initializer"></a>

```typescript
import { chimeAppInstance } from '@cdktn/provider-awscc'

const chimeAppInstanceTags: chimeAppInstance.ChimeAppInstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags.property.key">key</a></code> | <code>string</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags.property.value">value</a></code> | <code>string</code> | The value in a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chime_app_instance#key ChimeAppInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/chime_app_instance#value ChimeAppInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeAppInstanceTagsList <a name="ChimeAppInstanceTagsList" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.Initializer"></a>

```typescript
import { chimeAppInstance } from '@cdktn/provider-awscc'

new chimeAppInstance.ChimeAppInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.get"></a>

```typescript
public get(index: number): ChimeAppInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags">ChimeAppInstanceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeAppInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags">ChimeAppInstanceTags</a>[]

---


### ChimeAppInstanceTagsOutputReference <a name="ChimeAppInstanceTagsOutputReference" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.Initializer"></a>

```typescript
import { chimeAppInstance } from '@cdktn/provider-awscc'

new chimeAppInstance.ChimeAppInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags">ChimeAppInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeAppInstanceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstance.ChimeAppInstanceTags">ChimeAppInstanceTags</a>

---



