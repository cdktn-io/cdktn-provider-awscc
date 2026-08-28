# `servicecatalogAcceptedPortfolioShare` Submodule <a name="`servicecatalogAcceptedPortfolioShare` Submodule" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogAcceptedPortfolioShare <a name="ServicecatalogAcceptedPortfolioShare" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_accepted_portfolio_share awscc_servicecatalog_accepted_portfolio_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer"></a>

```typescript
import { servicecatalogAcceptedPortfolioShare } from '@cdktn/provider-awscc'

new servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare(scope: Construct, id: string, config: ServicecatalogAcceptedPortfolioShareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig">ServicecatalogAcceptedPortfolioShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig">ServicecatalogAcceptedPortfolioShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogAcceptedPortfolioShare resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isConstruct"></a>

```typescript
import { servicecatalogAcceptedPortfolioShare } from '@cdktn/provider-awscc'

servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformElement"></a>

```typescript
import { servicecatalogAcceptedPortfolioShare } from '@cdktn/provider-awscc'

servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformResource"></a>

```typescript
import { servicecatalogAcceptedPortfolioShare } from '@cdktn/provider-awscc'

servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport"></a>

```typescript
import { servicecatalogAcceptedPortfolioShare } from '@cdktn/provider-awscc'

servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicecatalogAcceptedPortfolioShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogAcceptedPortfolioShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogAcceptedPortfolioShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_accepted_portfolio_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogAcceptedPortfolioShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.portfolioIdInput">portfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.portfolioId">portfolioId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `portfolioIdInput`<sup>Optional</sup> <a name="portfolioIdInput" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.portfolioIdInput"></a>

```typescript
public readonly portfolioIdInput: string;
```

- *Type:* string

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogAcceptedPortfolioShareConfig <a name="ServicecatalogAcceptedPortfolioShareConfig" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.Initializer"></a>

```typescript
import { servicecatalogAcceptedPortfolioShare } from '@cdktn/provider-awscc'

const servicecatalogAcceptedPortfolioShareConfig: servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.portfolioId">portfolioId</a></code> | <code>string</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | The language code. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_accepted_portfolio_share#portfolio_id ServicecatalogAcceptedPortfolioShare#portfolio_id}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogAcceptedPortfolioShare.ServicecatalogAcceptedPortfolioShareConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_accepted_portfolio_share#accept_language ServicecatalogAcceptedPortfolioShare#accept_language}

---



