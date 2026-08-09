# `connectDataLakeAssociation` Submodule <a name="`connectDataLakeAssociation` Submodule" id="@cdktn/provider-awscc.connectDataLakeAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectDataLakeAssociation <a name="ConnectDataLakeAssociation" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_lake_association awscc_connect_data_lake_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.Initializer"></a>

```typescript
import { connectDataLakeAssociation } from '@cdktn/provider-awscc'

new connectDataLakeAssociation.ConnectDataLakeAssociation(scope: Construct, id: string, config: ConnectDataLakeAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig">ConnectDataLakeAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig">ConnectDataLakeAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.resetTargetAccountId">resetTargetAccountId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetTargetAccountId` <a name="resetTargetAccountId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.resetTargetAccountId"></a>

```typescript
public resetTargetAccountId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectDataLakeAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.isConstruct"></a>

```typescript
import { connectDataLakeAssociation } from '@cdktn/provider-awscc'

connectDataLakeAssociation.ConnectDataLakeAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.isTerraformElement"></a>

```typescript
import { connectDataLakeAssociation } from '@cdktn/provider-awscc'

connectDataLakeAssociation.ConnectDataLakeAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.isTerraformResource"></a>

```typescript
import { connectDataLakeAssociation } from '@cdktn/provider-awscc'

connectDataLakeAssociation.ConnectDataLakeAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.generateConfigForImport"></a>

```typescript
import { connectDataLakeAssociation } from '@cdktn/provider-awscc'

connectDataLakeAssociation.ConnectDataLakeAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectDataLakeAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectDataLakeAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectDataLakeAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_lake_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectDataLakeAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.resourceShareArn">resourceShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.resourceShareId">resourceShareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.dataSetIdInput">dataSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.targetAccountIdInput">targetAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.dataSetId">dataSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.targetAccountId">targetAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceShareArn`<sup>Required</sup> <a name="resourceShareArn" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.resourceShareArn"></a>

```typescript
public readonly resourceShareArn: string;
```

- *Type:* string

---

##### `resourceShareId`<sup>Required</sup> <a name="resourceShareId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.resourceShareId"></a>

```typescript
public readonly resourceShareId: string;
```

- *Type:* string

---

##### `dataSetIdInput`<sup>Optional</sup> <a name="dataSetIdInput" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.dataSetIdInput"></a>

```typescript
public readonly dataSetIdInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `targetAccountIdInput`<sup>Optional</sup> <a name="targetAccountIdInput" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.targetAccountIdInput"></a>

```typescript
public readonly targetAccountIdInput: string;
```

- *Type:* string

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `targetAccountId`<sup>Required</sup> <a name="targetAccountId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.targetAccountId"></a>

```typescript
public readonly targetAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectDataLakeAssociationConfig <a name="ConnectDataLakeAssociationConfig" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.Initializer"></a>

```typescript
import { connectDataLakeAssociation } from '@cdktn/provider-awscc'

const connectDataLakeAssociationConfig: connectDataLakeAssociation.ConnectDataLakeAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.dataSetId">dataSetId</a></code> | <code>string</code> | The identifier of the analytics data set. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.instanceId">instanceId</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.targetAccountId">targetAccountId</a></code> | <code>string</code> | The identifier of the target account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

The identifier of the analytics data set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_lake_association#data_set_id ConnectDataLakeAssociation#data_set_id}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_lake_association#instance_id ConnectDataLakeAssociation#instance_id}

---

##### `targetAccountId`<sup>Optional</sup> <a name="targetAccountId" id="@cdktn/provider-awscc.connectDataLakeAssociation.ConnectDataLakeAssociationConfig.property.targetAccountId"></a>

```typescript
public readonly targetAccountId: string;
```

- *Type:* string

The identifier of the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_lake_association#target_account_id ConnectDataLakeAssociation#target_account_id}

---



