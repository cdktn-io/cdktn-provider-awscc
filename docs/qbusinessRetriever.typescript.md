# `qbusinessRetriever` Submodule <a name="`qbusinessRetriever` Submodule" id="@cdktn/provider-awscc.qbusinessRetriever"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessRetriever <a name="QbusinessRetriever" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever awscc_qbusiness_retriever}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

new qbusinessRetriever.QbusinessRetriever(scope: Construct, id: string, config: QbusinessRetrieverConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig">QbusinessRetrieverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig">QbusinessRetrieverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putConfiguration"></a>

```typescript
public putConfiguration(value: QbusinessRetrieverConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putTags"></a>

```typescript
public putTags(value: IResolvable | QbusinessRetrieverTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>[]

---

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessRetriever resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isConstruct"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

qbusinessRetriever.QbusinessRetriever.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformElement"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

qbusinessRetriever.QbusinessRetriever.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformResource"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

qbusinessRetriever.QbusinessRetriever.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

qbusinessRetriever.QbusinessRetriever.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QbusinessRetriever resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QbusinessRetriever to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QbusinessRetriever that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessRetriever to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference">QbusinessRetrieverConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.retrieverArn">retrieverArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.retrieverId">retrieverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList">QbusinessRetrieverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.configuration"></a>

```typescript
public readonly configuration: QbusinessRetrieverConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference">QbusinessRetrieverConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `retrieverArn`<sup>Required</sup> <a name="retrieverArn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.retrieverArn"></a>

```typescript
public readonly retrieverArn: string;
```

- *Type:* string

---

##### `retrieverId`<sup>Required</sup> <a name="retrieverId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.retrieverId"></a>

```typescript
public readonly retrieverId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tags"></a>

```typescript
public readonly tags: QbusinessRetrieverTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList">QbusinessRetrieverTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | QbusinessRetrieverConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | QbusinessRetrieverTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetriever.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessRetrieverConfig <a name="QbusinessRetrieverConfig" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.Initializer"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

const qbusinessRetrieverConfig: qbusinessRetriever.QbusinessRetrieverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#application_id QbusinessRetriever#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#configuration QbusinessRetriever#configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#display_name QbusinessRetriever#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#type QbusinessRetriever#type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#role_arn QbusinessRetriever#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#tags QbusinessRetriever#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#application_id QbusinessRetriever#application_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.configuration"></a>

```typescript
public readonly configuration: QbusinessRetrieverConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#configuration QbusinessRetriever#configuration}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#display_name QbusinessRetriever#display_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#type QbusinessRetriever#type}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#role_arn QbusinessRetriever#role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | QbusinessRetrieverTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#tags QbusinessRetriever#tags}.

---

### QbusinessRetrieverConfiguration <a name="QbusinessRetrieverConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration.Initializer"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

const qbusinessRetrieverConfiguration: qbusinessRetriever.QbusinessRetrieverConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration.property.kendraIndexConfiguration">kendraIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#kendra_index_configuration QbusinessRetriever#kendra_index_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration.property.nativeIndexConfiguration">nativeIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#native_index_configuration QbusinessRetriever#native_index_configuration}. |

---

##### `kendraIndexConfiguration`<sup>Optional</sup> <a name="kendraIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration.property.kendraIndexConfiguration"></a>

```typescript
public readonly kendraIndexConfiguration: QbusinessRetrieverConfigurationKendraIndexConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#kendra_index_configuration QbusinessRetriever#kendra_index_configuration}.

---

##### `nativeIndexConfiguration`<sup>Optional</sup> <a name="nativeIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration.property.nativeIndexConfiguration"></a>

```typescript
public readonly nativeIndexConfiguration: QbusinessRetrieverConfigurationNativeIndexConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#native_index_configuration QbusinessRetriever#native_index_configuration}.

---

### QbusinessRetrieverConfigurationKendraIndexConfiguration <a name="QbusinessRetrieverConfigurationKendraIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration.Initializer"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

const qbusinessRetrieverConfigurationKendraIndexConfiguration: qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration.property.indexId">indexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#index_id QbusinessRetriever#index_id}. |

---

##### `indexId`<sup>Optional</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#index_id QbusinessRetriever#index_id}.

---

### QbusinessRetrieverConfigurationNativeIndexConfiguration <a name="QbusinessRetrieverConfigurationNativeIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration.Initializer"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

const qbusinessRetrieverConfigurationNativeIndexConfiguration: qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration.property.indexId">indexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#index_id QbusinessRetriever#index_id}. |

---

##### `indexId`<sup>Optional</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#index_id QbusinessRetriever#index_id}.

---

### QbusinessRetrieverTags <a name="QbusinessRetrieverTags" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags.Initializer"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

const qbusinessRetrieverTags: qbusinessRetriever.QbusinessRetrieverTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#key QbusinessRetriever#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#value QbusinessRetriever#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#key QbusinessRetriever#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_retriever#value QbusinessRetriever#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference <a name="QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

new qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resetIndexId">resetIndexId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIndexId` <a name="resetIndexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.resetIndexId"></a>

```typescript
public resetIndexId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexIdInput">indexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexIdInput"></a>

```typescript
public readonly indexIdInput: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessRetrieverConfigurationKendraIndexConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a>

---


### QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference <a name="QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

new qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resetIndexId">resetIndexId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIndexId` <a name="resetIndexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.resetIndexId"></a>

```typescript
public resetIndexId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexIdInput">indexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexIdInput"></a>

```typescript
public readonly indexIdInput: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessRetrieverConfigurationNativeIndexConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a>

---


### QbusinessRetrieverConfigurationOutputReference <a name="QbusinessRetrieverConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

new qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putKendraIndexConfiguration">putKendraIndexConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putNativeIndexConfiguration">putNativeIndexConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resetKendraIndexConfiguration">resetKendraIndexConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resetNativeIndexConfiguration">resetNativeIndexConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKendraIndexConfiguration` <a name="putKendraIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putKendraIndexConfiguration"></a>

```typescript
public putKendraIndexConfiguration(value: QbusinessRetrieverConfigurationKendraIndexConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putKendraIndexConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a>

---

##### `putNativeIndexConfiguration` <a name="putNativeIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putNativeIndexConfiguration"></a>

```typescript
public putNativeIndexConfiguration(value: QbusinessRetrieverConfigurationNativeIndexConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.putNativeIndexConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a>

---

##### `resetKendraIndexConfiguration` <a name="resetKendraIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resetKendraIndexConfiguration"></a>

```typescript
public resetKendraIndexConfiguration(): void
```

##### `resetNativeIndexConfiguration` <a name="resetNativeIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.resetNativeIndexConfiguration"></a>

```typescript
public resetNativeIndexConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfiguration">kendraIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference">QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfiguration">nativeIndexConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference">QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfigurationInput">kendraIndexConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfigurationInput">nativeIndexConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kendraIndexConfiguration`<sup>Required</sup> <a name="kendraIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfiguration"></a>

```typescript
public readonly kendraIndexConfiguration: QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference">QbusinessRetrieverConfigurationKendraIndexConfigurationOutputReference</a>

---

##### `nativeIndexConfiguration`<sup>Required</sup> <a name="nativeIndexConfiguration" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfiguration"></a>

```typescript
public readonly nativeIndexConfiguration: QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference">QbusinessRetrieverConfigurationNativeIndexConfigurationOutputReference</a>

---

##### `kendraIndexConfigurationInput`<sup>Optional</sup> <a name="kendraIndexConfigurationInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.kendraIndexConfigurationInput"></a>

```typescript
public readonly kendraIndexConfigurationInput: IResolvable | QbusinessRetrieverConfigurationKendraIndexConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationKendraIndexConfiguration">QbusinessRetrieverConfigurationKendraIndexConfiguration</a>

---

##### `nativeIndexConfigurationInput`<sup>Optional</sup> <a name="nativeIndexConfigurationInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.nativeIndexConfigurationInput"></a>

```typescript
public readonly nativeIndexConfigurationInput: IResolvable | QbusinessRetrieverConfigurationNativeIndexConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationNativeIndexConfiguration">QbusinessRetrieverConfigurationNativeIndexConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessRetrieverConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverConfiguration">QbusinessRetrieverConfiguration</a>

---


### QbusinessRetrieverTagsList <a name="QbusinessRetrieverTagsList" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

new qbusinessRetriever.QbusinessRetrieverTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.get"></a>

```typescript
public get(index: number): QbusinessRetrieverTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessRetrieverTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>[]

---


### QbusinessRetrieverTagsOutputReference <a name="QbusinessRetrieverTagsOutputReference" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer"></a>

```typescript
import { qbusinessRetriever } from '@cdktn/provider-awscc'

new qbusinessRetriever.QbusinessRetrieverTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessRetrieverTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessRetriever.QbusinessRetrieverTags">QbusinessRetrieverTags</a>

---



