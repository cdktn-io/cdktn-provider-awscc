# `casesRelatedItem` Submodule <a name="`casesRelatedItem` Submodule" id="@cdktn/provider-awscc.casesRelatedItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesRelatedItem <a name="CasesRelatedItem" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item awscc_cases_related_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

new casesRelatedItem.CasesRelatedItem(scope: Construct, id: string, config: CasesRelatedItemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig">CasesRelatedItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig">CasesRelatedItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent"></a>

```typescript
public putContent(value: CasesRelatedItemContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags"></a>

```typescript
public putTags(value: IResolvable | CasesRelatedItemTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CasesRelatedItem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

casesRelatedItem.CasesRelatedItem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

casesRelatedItem.CasesRelatedItem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

casesRelatedItem.CasesRelatedItem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

casesRelatedItem.CasesRelatedItem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CasesRelatedItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CasesRelatedItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CasesRelatedItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CasesRelatedItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference">CasesRelatedItemContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemArn">relatedItemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemId">relatedItemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList">CasesRelatedItemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseIdInput">caseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.contentInput">contentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseId">caseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.content"></a>

```typescript
public readonly content: CasesRelatedItemContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference">CasesRelatedItemContentOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `relatedItemArn`<sup>Required</sup> <a name="relatedItemArn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemArn"></a>

```typescript
public readonly relatedItemArn: string;
```

- *Type:* string

---

##### `relatedItemId`<sup>Required</sup> <a name="relatedItemId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemId"></a>

```typescript
public readonly relatedItemId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tags"></a>

```typescript
public readonly tags: CasesRelatedItemTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList">CasesRelatedItemTagsList</a>

---

##### `caseIdInput`<sup>Optional</sup> <a name="caseIdInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseIdInput"></a>

```typescript
public readonly caseIdInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.contentInput"></a>

```typescript
public readonly contentInput: IResolvable | CasesRelatedItemContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CasesRelatedItemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `caseId`<sup>Required</sup> <a name="caseId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseId"></a>

```typescript
public readonly caseId: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CasesRelatedItemConfig <a name="CasesRelatedItemConfig" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.Initializer"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

const casesRelatedItemConfig: casesRelatedItem.CasesRelatedItemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.caseId">caseId</a></code> | <code>string</code> | A unique identifier of the case. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | The content of a related item to be created. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.domainId">domainId</a></code> | <code>string</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.type">type</a></code> | <code>string</code> | The type of a related item. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]</code> | A list of tags on the related item. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `caseId`<sup>Required</sup> <a name="caseId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.caseId"></a>

```typescript
public readonly caseId: string;
```

- *Type:* string

A unique identifier of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#case_id CasesRelatedItem#case_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.content"></a>

```typescript
public readonly content: CasesRelatedItemContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

The content of a related item to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#content CasesRelatedItem#content}

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#domain_id CasesRelatedItem#domain_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of a related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#type CasesRelatedItem#type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CasesRelatedItemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]

A list of tags on the related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#tags CasesRelatedItem#tags}

---

### CasesRelatedItemContent <a name="CasesRelatedItemContent" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.Initializer"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

const casesRelatedItemContent: casesRelatedItem.CasesRelatedItemContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.property.comment">comment</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | Represents a comment. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.property.comment"></a>

```typescript
public readonly comment: CasesRelatedItemContentComment;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

Represents a comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#comment CasesRelatedItem#comment}

---

### CasesRelatedItemContentComment <a name="CasesRelatedItemContentComment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.Initializer"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

const casesRelatedItemContentComment: casesRelatedItem.CasesRelatedItemContentComment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.body">body</a></code> | <code>string</code> | Text in the body of a comment. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.contentType">contentType</a></code> | <code>string</code> | Type of the text in the comment. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Text in the body of a comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#body CasesRelatedItem#body}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Type of the text in the comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#content_type CasesRelatedItem#content_type}

---

### CasesRelatedItemTags <a name="CasesRelatedItemTags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.Initializer"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

const casesRelatedItemTags: casesRelatedItem.CasesRelatedItemTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#key CasesRelatedItem#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#value CasesRelatedItem#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesRelatedItemContentCommentOutputReference <a name="CasesRelatedItemContentCommentOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

new casesRelatedItem.CasesRelatedItemContentCommentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetContentType">resetContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesRelatedItemContentComment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

---


### CasesRelatedItemContentOutputReference <a name="CasesRelatedItemContentOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

new casesRelatedItem.CasesRelatedItemContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment">putComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComment` <a name="putComment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment"></a>

```typescript
public putComment(value: CasesRelatedItemContentComment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference">CasesRelatedItemContentCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.commentInput">commentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.comment"></a>

```typescript
public readonly comment: CasesRelatedItemContentCommentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference">CasesRelatedItemContentCommentOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: IResolvable | CasesRelatedItemContentComment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesRelatedItemContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

---


### CasesRelatedItemTagsList <a name="CasesRelatedItemTagsList" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

new casesRelatedItem.CasesRelatedItemTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get"></a>

```typescript
public get(index: number): CasesRelatedItemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesRelatedItemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]

---


### CasesRelatedItemTagsOutputReference <a name="CasesRelatedItemTagsOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer"></a>

```typescript
import { casesRelatedItem } from '@cdktn/provider-awscc'

new casesRelatedItem.CasesRelatedItemTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesRelatedItemTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>

---



