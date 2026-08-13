# `servicecatalogPortfolio` Submodule <a name="`servicecatalogPortfolio` Submodule" id="@cdktn/provider-awscc.servicecatalogPortfolio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogPortfolio <a name="ServicecatalogPortfolio" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio awscc_servicecatalog_portfolio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer"></a>

```typescript
import { servicecatalogPortfolio } from '@cdktn/provider-awscc'

new servicecatalogPortfolio.ServicecatalogPortfolio(scope: Construct, id: string, config: ServicecatalogPortfolioConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig">ServicecatalogPortfolioConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig">ServicecatalogPortfolioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.putTags"></a>

```typescript
public putTags(value: IResolvable | ServicecatalogPortfolioTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>[]

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogPortfolio resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isConstruct"></a>

```typescript
import { servicecatalogPortfolio } from '@cdktn/provider-awscc'

servicecatalogPortfolio.ServicecatalogPortfolio.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformElement"></a>

```typescript
import { servicecatalogPortfolio } from '@cdktn/provider-awscc'

servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformResource"></a>

```typescript
import { servicecatalogPortfolio } from '@cdktn/provider-awscc'

servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport"></a>

```typescript
import { servicecatalogPortfolio } from '@cdktn/provider-awscc'

servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicecatalogPortfolio resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogPortfolio to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogPortfolio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogPortfolio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.portfolioId">portfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.portfolioName">portfolioName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList">ServicecatalogPortfolioTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

---

##### `portfolioName`<sup>Required</sup> <a name="portfolioName" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.portfolioName"></a>

```typescript
public readonly portfolioName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tags"></a>

```typescript
public readonly tags: ServicecatalogPortfolioTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList">ServicecatalogPortfolioTagsList</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ServicecatalogPortfolioTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>[]

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolio.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogPortfolioConfig <a name="ServicecatalogPortfolioConfig" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.Initializer"></a>

```typescript
import { servicecatalogPortfolio } from '@cdktn/provider-awscc'

const servicecatalogPortfolioConfig: servicecatalogPortfolio.ServicecatalogPortfolioConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#display_name ServicecatalogPortfolio#display_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#provider_name ServicecatalogPortfolio#provider_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#accept_language ServicecatalogPortfolio#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#description ServicecatalogPortfolio#description}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#tags ServicecatalogPortfolio#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#display_name ServicecatalogPortfolio#display_name}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#provider_name ServicecatalogPortfolio#provider_name}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#accept_language ServicecatalogPortfolio#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#description ServicecatalogPortfolio#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ServicecatalogPortfolioTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#tags ServicecatalogPortfolio#tags}.

---

### ServicecatalogPortfolioTags <a name="ServicecatalogPortfolioTags" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags.Initializer"></a>

```typescript
import { servicecatalogPortfolio } from '@cdktn/provider-awscc'

const servicecatalogPortfolioTags: servicecatalogPortfolio.ServicecatalogPortfolioTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#key ServicecatalogPortfolio#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#value ServicecatalogPortfolio#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#key ServicecatalogPortfolio#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_portfolio#value ServicecatalogPortfolio#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogPortfolioTagsList <a name="ServicecatalogPortfolioTagsList" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer"></a>

```typescript
import { servicecatalogPortfolio } from '@cdktn/provider-awscc'

new servicecatalogPortfolio.ServicecatalogPortfolioTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.get"></a>

```typescript
public get(index: number): ServicecatalogPortfolioTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogPortfolioTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>[]

---


### ServicecatalogPortfolioTagsOutputReference <a name="ServicecatalogPortfolioTagsOutputReference" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer"></a>

```typescript
import { servicecatalogPortfolio } from '@cdktn/provider-awscc'

new servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogPortfolioTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogPortfolio.ServicecatalogPortfolioTags">ServicecatalogPortfolioTags</a>

---



