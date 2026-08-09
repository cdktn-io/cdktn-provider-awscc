# `connectContactFlowModuleVersion` Submodule <a name="`connectContactFlowModuleVersion` Submodule" id="@cdktn/provider-awscc.connectContactFlowModuleVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectContactFlowModuleVersion <a name="ConnectContactFlowModuleVersion" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module_version awscc_connect_contact_flow_module_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.Initializer"></a>

```typescript
import { connectContactFlowModuleVersion } from '@cdktn/provider-awscc'

new connectContactFlowModuleVersion.ConnectContactFlowModuleVersion(scope: Construct, id: string, config: ConnectContactFlowModuleVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig">ConnectContactFlowModuleVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig">ConnectContactFlowModuleVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectContactFlowModuleVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isConstruct"></a>

```typescript
import { connectContactFlowModuleVersion } from '@cdktn/provider-awscc'

connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isTerraformElement"></a>

```typescript
import { connectContactFlowModuleVersion } from '@cdktn/provider-awscc'

connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isTerraformResource"></a>

```typescript
import { connectContactFlowModuleVersion } from '@cdktn/provider-awscc'

connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.generateConfigForImport"></a>

```typescript
import { connectContactFlowModuleVersion } from '@cdktn/provider-awscc'

connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectContactFlowModuleVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectContactFlowModuleVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectContactFlowModuleVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectContactFlowModuleVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.contactFlowModuleVersionArn">contactFlowModuleVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.flowModuleContentSha256">flowModuleContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.contactFlowModuleIdInput">contactFlowModuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.contactFlowModuleId">contactFlowModuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `contactFlowModuleVersionArn`<sup>Required</sup> <a name="contactFlowModuleVersionArn" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.contactFlowModuleVersionArn"></a>

```typescript
public readonly contactFlowModuleVersionArn: string;
```

- *Type:* string

---

##### `flowModuleContentSha256`<sup>Required</sup> <a name="flowModuleContentSha256" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.flowModuleContentSha256"></a>

```typescript
public readonly flowModuleContentSha256: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `contactFlowModuleIdInput`<sup>Optional</sup> <a name="contactFlowModuleIdInput" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.contactFlowModuleIdInput"></a>

```typescript
public readonly contactFlowModuleIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `contactFlowModuleId`<sup>Required</sup> <a name="contactFlowModuleId" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.contactFlowModuleId"></a>

```typescript
public readonly contactFlowModuleId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectContactFlowModuleVersionConfig <a name="ConnectContactFlowModuleVersionConfig" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.Initializer"></a>

```typescript
import { connectContactFlowModuleVersion } from '@cdktn/provider-awscc'

const connectContactFlowModuleVersionConfig: connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.contactFlowModuleId">contactFlowModuleId</a></code> | <code>string</code> | The identifier of the contact flow module (ARN) this version is tied to. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.description">description</a></code> | <code>string</code> | The description of the version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `contactFlowModuleId`<sup>Required</sup> <a name="contactFlowModuleId" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.contactFlowModuleId"></a>

```typescript
public readonly contactFlowModuleId: string;
```

- *Type:* string

The identifier of the contact flow module (ARN) this version is tied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module_version#contact_flow_module_id ConnectContactFlowModuleVersion#contact_flow_module_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectContactFlowModuleVersion.ConnectContactFlowModuleVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_contact_flow_module_version#description ConnectContactFlowModuleVersion#description}

---



