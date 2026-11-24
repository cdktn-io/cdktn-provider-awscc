# `apiportalProductDisplayOrder` Submodule <a name="`apiportalProductDisplayOrder` Submodule" id="@cdktn/provider-awscc.apiportalProductDisplayOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalProductDisplayOrder <a name="ApiportalProductDisplayOrder" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order awscc_apiportal_product_display_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer"></a>

```typescript
import { apiportalProductDisplayOrder } from '@cdktn/provider-awscc'

new apiportalProductDisplayOrder.ApiportalProductDisplayOrder(scope: Construct, id: string, config: ApiportalProductDisplayOrderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig">ApiportalProductDisplayOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig">ApiportalProductDisplayOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.putContents">putContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetContents">resetContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverviewPageArn">resetOverviewPageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetProductPageArns">resetProductPageArns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContents` <a name="putContents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.putContents"></a>

```typescript
public putContents(value: IResolvable | ApiportalProductDisplayOrderContents[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.putContents.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>[]

---

##### `resetContents` <a name="resetContents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetContents"></a>

```typescript
public resetContents(): void
```

##### `resetOverviewPageArn` <a name="resetOverviewPageArn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetOverviewPageArn"></a>

```typescript
public resetOverviewPageArn(): void
```

##### `resetProductPageArns` <a name="resetProductPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.resetProductPageArns"></a>

```typescript
public resetProductPageArns(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalProductDisplayOrder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isConstruct"></a>

```typescript
import { apiportalProductDisplayOrder } from '@cdktn/provider-awscc'

apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformElement"></a>

```typescript
import { apiportalProductDisplayOrder } from '@cdktn/provider-awscc'

apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformResource"></a>

```typescript
import { apiportalProductDisplayOrder } from '@cdktn/provider-awscc'

apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport"></a>

```typescript
import { apiportalProductDisplayOrder } from '@cdktn/provider-awscc'

apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiportalProductDisplayOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiportalProductDisplayOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiportalProductDisplayOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalProductDisplayOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contents">contents</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList">ApiportalProductDisplayOrderContentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contentsInput">contentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArnInput">overviewPageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArnsInput">productPageArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArn">overviewPageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArns">productPageArns</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contents"></a>

```typescript
public readonly contents: ApiportalProductDisplayOrderContentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList">ApiportalProductDisplayOrderContentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.contentsInput"></a>

```typescript
public readonly contentsInput: IResolvable | ApiportalProductDisplayOrderContents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>[]

---

##### `overviewPageArnInput`<sup>Optional</sup> <a name="overviewPageArnInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArnInput"></a>

```typescript
public readonly overviewPageArnInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `productPageArnsInput`<sup>Optional</sup> <a name="productPageArnsInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArnsInput"></a>

```typescript
public readonly productPageArnsInput: string[];
```

- *Type:* string[]

---

##### `overviewPageArn`<sup>Required</sup> <a name="overviewPageArn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.overviewPageArn"></a>

```typescript
public readonly overviewPageArn: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `productPageArns`<sup>Required</sup> <a name="productPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.productPageArns"></a>

```typescript
public readonly productPageArns: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalProductDisplayOrderConfig <a name="ApiportalProductDisplayOrderConfig" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.Initializer"></a>

```typescript
import { apiportalProductDisplayOrder } from '@cdktn/provider-awscc'

const apiportalProductDisplayOrderConfig: apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productId">productId</a></code> | <code>string</code> | The identifier of the parent Product. Singleton key for this CFN type. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.contents">contents</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>[]</code> | Sectioned arrangement of ProductApiPage ARNs. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.overviewPageArn">overviewPageArn</a></code> | <code>string</code> | ARN of the ProductPage rendered as the overview/landing page. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productPageArns">productPageArns</a></code> | <code>string[]</code> | Top-level ProductPage ARNs in display order. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The identifier of the parent Product. Singleton key for this CFN type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_id ApiportalProductDisplayOrder#product_id}

---

##### `contents`<sup>Optional</sup> <a name="contents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.contents"></a>

```typescript
public readonly contents: IResolvable | ApiportalProductDisplayOrderContents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>[]

Sectioned arrangement of ProductApiPage ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#contents ApiportalProductDisplayOrder#contents}

---

##### `overviewPageArn`<sup>Optional</sup> <a name="overviewPageArn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.overviewPageArn"></a>

```typescript
public readonly overviewPageArn: string;
```

- *Type:* string

ARN of the ProductPage rendered as the overview/landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#overview_page_arn ApiportalProductDisplayOrder#overview_page_arn}

---

##### `productPageArns`<sup>Optional</sup> <a name="productPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderConfig.property.productPageArns"></a>

```typescript
public readonly productPageArns: string[];
```

- *Type:* string[]

Top-level ProductPage ARNs in display order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_page_arns ApiportalProductDisplayOrder#product_page_arns}

---

### ApiportalProductDisplayOrderContents <a name="ApiportalProductDisplayOrderContents" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.Initializer"></a>

```typescript
import { apiportalProductDisplayOrder } from '@cdktn/provider-awscc'

const apiportalProductDisplayOrderContents: apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.productApiPageArns">productApiPageArns</a></code> | <code>string[]</code> | Ordered ProductApiPage ARNs shown under this section. Required; use an empty list for a placeholder section. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.sectionName">sectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#section_name ApiportalProductDisplayOrder#section_name}. |

---

##### `productApiPageArns`<sup>Optional</sup> <a name="productApiPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.productApiPageArns"></a>

```typescript
public readonly productApiPageArns: string[];
```

- *Type:* string[]

Ordered ProductApiPage ARNs shown under this section. Required; use an empty list for a placeholder section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#product_api_page_arns ApiportalProductDisplayOrder#product_api_page_arns}

---

##### `sectionName`<sup>Optional</sup> <a name="sectionName" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents.property.sectionName"></a>

```typescript
public readonly sectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_display_order#section_name ApiportalProductDisplayOrder#section_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalProductDisplayOrderContentsList <a name="ApiportalProductDisplayOrderContentsList" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer"></a>

```typescript
import { apiportalProductDisplayOrder } from '@cdktn/provider-awscc'

new apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.get"></a>

```typescript
public get(index: number): ApiportalProductDisplayOrderContentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalProductDisplayOrderContents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>[]

---


### ApiportalProductDisplayOrderContentsOutputReference <a name="ApiportalProductDisplayOrderContentsOutputReference" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer"></a>

```typescript
import { apiportalProductDisplayOrder } from '@cdktn/provider-awscc'

new apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetProductApiPageArns">resetProductApiPageArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetSectionName">resetSectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProductApiPageArns` <a name="resetProductApiPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetProductApiPageArns"></a>

```typescript
public resetProductApiPageArns(): void
```

##### `resetSectionName` <a name="resetSectionName" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.resetSectionName"></a>

```typescript
public resetSectionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArnsInput">productApiPageArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionNameInput">sectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArns">productApiPageArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionName">sectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `productApiPageArnsInput`<sup>Optional</sup> <a name="productApiPageArnsInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArnsInput"></a>

```typescript
public readonly productApiPageArnsInput: string[];
```

- *Type:* string[]

---

##### `sectionNameInput`<sup>Optional</sup> <a name="sectionNameInput" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionNameInput"></a>

```typescript
public readonly sectionNameInput: string;
```

- *Type:* string

---

##### `productApiPageArns`<sup>Required</sup> <a name="productApiPageArns" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.productApiPageArns"></a>

```typescript
public readonly productApiPageArns: string[];
```

- *Type:* string[]

---

##### `sectionName`<sup>Required</sup> <a name="sectionName" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.sectionName"></a>

```typescript
public readonly sectionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalProductDisplayOrderContents;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductDisplayOrder.ApiportalProductDisplayOrderContents">ApiportalProductDisplayOrderContents</a>

---



