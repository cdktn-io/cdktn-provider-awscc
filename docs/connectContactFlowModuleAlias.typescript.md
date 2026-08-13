# `connectContactFlowModuleAlias` Submodule <a name="`connectContactFlowModuleAlias` Submodule" id="@cdktn/provider-awscc.connectContactFlowModuleAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectContactFlowModuleAlias <a name="ConnectContactFlowModuleAlias" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module_alias awscc_connect_contact_flow_module_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.Initializer"></a>

```typescript
import { connectContactFlowModuleAlias } from '@cdktn/provider-awscc'

new connectContactFlowModuleAlias.ConnectContactFlowModuleAlias(scope: Construct, id: string, config: ConnectContactFlowModuleAliasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig">ConnectContactFlowModuleAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig">ConnectContactFlowModuleAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.resetDescription"></a>

```typescript
public resetDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectContactFlowModuleAlias resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isConstruct"></a>

```typescript
import { connectContactFlowModuleAlias } from '@cdktn/provider-awscc'

connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isTerraformElement"></a>

```typescript
import { connectContactFlowModuleAlias } from '@cdktn/provider-awscc'

connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isTerraformResource"></a>

```typescript
import { connectContactFlowModuleAlias } from '@cdktn/provider-awscc'

connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.generateConfigForImport"></a>

```typescript
import { connectContactFlowModuleAlias } from '@cdktn/provider-awscc'

connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectContactFlowModuleAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectContactFlowModuleAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectContactFlowModuleAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectContactFlowModuleAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.aliasId">aliasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.contactFlowModuleAliasArn">contactFlowModuleAliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.contactFlowModuleIdInput">contactFlowModuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.contactFlowModuleVersionInput">contactFlowModuleVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.contactFlowModuleId">contactFlowModuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.contactFlowModuleVersion">contactFlowModuleVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aliasId`<sup>Required</sup> <a name="aliasId" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.aliasId"></a>

```typescript
public readonly aliasId: string;
```

- *Type:* string

---

##### `contactFlowModuleAliasArn`<sup>Required</sup> <a name="contactFlowModuleAliasArn" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.contactFlowModuleAliasArn"></a>

```typescript
public readonly contactFlowModuleAliasArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `contactFlowModuleIdInput`<sup>Optional</sup> <a name="contactFlowModuleIdInput" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.contactFlowModuleIdInput"></a>

```typescript
public readonly contactFlowModuleIdInput: string;
```

- *Type:* string

---

##### `contactFlowModuleVersionInput`<sup>Optional</sup> <a name="contactFlowModuleVersionInput" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.contactFlowModuleVersionInput"></a>

```typescript
public readonly contactFlowModuleVersionInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `contactFlowModuleId`<sup>Required</sup> <a name="contactFlowModuleId" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.contactFlowModuleId"></a>

```typescript
public readonly contactFlowModuleId: string;
```

- *Type:* string

---

##### `contactFlowModuleVersion`<sup>Required</sup> <a name="contactFlowModuleVersion" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.contactFlowModuleVersion"></a>

```typescript
public readonly contactFlowModuleVersion: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAlias.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectContactFlowModuleAliasConfig <a name="ConnectContactFlowModuleAliasConfig" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.Initializer"></a>

```typescript
import { connectContactFlowModuleAlias } from '@cdktn/provider-awscc'

const connectContactFlowModuleAliasConfig: connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.contactFlowModuleId">contactFlowModuleId</a></code> | <code>string</code> | The identifier of the contact flow module (ARN) this alias is tied to. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.contactFlowModuleVersion">contactFlowModuleVersion</a></code> | <code>number</code> | The version number of the contact flow module this alias points to. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.name">name</a></code> | <code>string</code> | The name of the alias. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.description">description</a></code> | <code>string</code> | The description of the alias. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `contactFlowModuleId`<sup>Required</sup> <a name="contactFlowModuleId" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.contactFlowModuleId"></a>

```typescript
public readonly contactFlowModuleId: string;
```

- *Type:* string

The identifier of the contact flow module (ARN) this alias is tied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module_alias#contact_flow_module_id ConnectContactFlowModuleAlias#contact_flow_module_id}

---

##### `contactFlowModuleVersion`<sup>Required</sup> <a name="contactFlowModuleVersion" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.contactFlowModuleVersion"></a>

```typescript
public readonly contactFlowModuleVersion: number;
```

- *Type:* number

The version number of the contact flow module this alias points to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module_alias#contact_flow_module_version ConnectContactFlowModuleAlias#contact_flow_module_version}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module_alias#name ConnectContactFlowModuleAlias#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectContactFlowModuleAlias.ConnectContactFlowModuleAliasConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module_alias#description ConnectContactFlowModuleAlias#description}

---



