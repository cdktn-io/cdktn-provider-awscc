# `customerprofilesRecommender` Submodule <a name="`customerprofilesRecommender` Submodule" id="@cdktn/provider-awscc.customerprofilesRecommender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesRecommender <a name="CustomerprofilesRecommender" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender awscc_customerprofiles_recommender}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommender(scope: Construct, id: string, config: CustomerprofilesRecommenderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig">CustomerprofilesRecommenderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig">CustomerprofilesRecommenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig">putRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetRecommenderConfig">resetRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecommenderConfig` <a name="putRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig"></a>

```typescript
public putRecommenderConfig(value: CustomerprofilesRecommenderRecommenderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags"></a>

```typescript
public putTags(value: IResolvable | CustomerprofilesRecommenderTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRecommenderConfig` <a name="resetRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetRecommenderConfig"></a>

```typescript
public resetRecommenderConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesRecommender resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

customerprofilesRecommender.CustomerprofilesRecommender.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CustomerprofilesRecommender resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesRecommender to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesRecommender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesRecommender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.latestRecommenderUpdate">latestRecommenderUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderArn">recommenderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfig">recommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList">CustomerprofilesRecommenderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.trainingMetrics">trainingMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList">CustomerprofilesRecommenderTrainingMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfigInput">recommenderConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderNameInput">recommenderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeNameInput">recommenderRecipeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderName">recommenderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeName">recommenderRecipeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `latestRecommenderUpdate`<sup>Required</sup> <a name="latestRecommenderUpdate" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.latestRecommenderUpdate"></a>

```typescript
public readonly latestRecommenderUpdate: CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference</a>

---

##### `recommenderArn`<sup>Required</sup> <a name="recommenderArn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderArn"></a>

```typescript
public readonly recommenderArn: string;
```

- *Type:* string

---

##### `recommenderConfig`<sup>Required</sup> <a name="recommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfig"></a>

```typescript
public readonly recommenderConfig: CustomerprofilesRecommenderRecommenderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tags"></a>

```typescript
public readonly tags: CustomerprofilesRecommenderTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList">CustomerprofilesRecommenderTagsList</a>

---

##### `trainingMetrics`<sup>Required</sup> <a name="trainingMetrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.trainingMetrics"></a>

```typescript
public readonly trainingMetrics: CustomerprofilesRecommenderTrainingMetricsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList">CustomerprofilesRecommenderTrainingMetricsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `recommenderConfigInput`<sup>Optional</sup> <a name="recommenderConfigInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfigInput"></a>

```typescript
public readonly recommenderConfigInput: IResolvable | CustomerprofilesRecommenderRecommenderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

---

##### `recommenderNameInput`<sup>Optional</sup> <a name="recommenderNameInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderNameInput"></a>

```typescript
public readonly recommenderNameInput: string;
```

- *Type:* string

---

##### `recommenderRecipeNameInput`<sup>Optional</sup> <a name="recommenderRecipeNameInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeNameInput"></a>

```typescript
public readonly recommenderRecipeNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CustomerprofilesRecommenderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `recommenderName`<sup>Required</sup> <a name="recommenderName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderName"></a>

```typescript
public readonly recommenderName: string;
```

- *Type:* string

---

##### `recommenderRecipeName`<sup>Required</sup> <a name="recommenderRecipeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeName"></a>

```typescript
public readonly recommenderRecipeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesRecommenderConfig <a name="CustomerprofilesRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

const customerprofilesRecommenderConfig: customerprofilesRecommender.CustomerprofilesRecommenderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.domainName">domainName</a></code> | <code>string</code> | The name of the domain for which the recommender will be created. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderName">recommenderName</a></code> | <code>string</code> | The name of the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderRecipeName">recommenderRecipeName</a></code> | <code>string</code> | The name of the recommender recipe. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.description">description</a></code> | <code>string</code> | The description of the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderConfig">recommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a></code> | Configuration for the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the domain for which the recommender will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#domain_name CustomerprofilesRecommender#domain_name}

---

##### `recommenderName`<sup>Required</sup> <a name="recommenderName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderName"></a>

```typescript
public readonly recommenderName: string;
```

- *Type:* string

The name of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#recommender_name CustomerprofilesRecommender#recommender_name}

---

##### `recommenderRecipeName`<sup>Required</sup> <a name="recommenderRecipeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderRecipeName"></a>

```typescript
public readonly recommenderRecipeName: string;
```

- *Type:* string

The name of the recommender recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#recommender_recipe_name CustomerprofilesRecommender#recommender_recipe_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#description CustomerprofilesRecommender#description}

---

##### `recommenderConfig`<sup>Optional</sup> <a name="recommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderConfig"></a>

```typescript
public readonly recommenderConfig: CustomerprofilesRecommenderRecommenderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

Configuration for the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#recommender_config CustomerprofilesRecommender#recommender_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CustomerprofilesRecommenderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#tags CustomerprofilesRecommender#tags}

---

### CustomerprofilesRecommenderLatestRecommenderUpdate <a name="CustomerprofilesRecommenderLatestRecommenderUpdate" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

const customerprofilesRecommenderLatestRecommenderUpdate: customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate = { ... }
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

const customerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig: customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig = { ... }
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

const customerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig: customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig = { ... }
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

const customerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct: customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct = { ... }
```


### CustomerprofilesRecommenderRecommenderConfig <a name="CustomerprofilesRecommenderRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

const customerprofilesRecommenderRecommenderConfig: customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.property.eventsConfig">eventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a></code> | Configuration for events used in the recommender. |

---

##### `eventsConfig`<sup>Optional</sup> <a name="eventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.property.eventsConfig"></a>

```typescript
public readonly eventsConfig: CustomerprofilesRecommenderRecommenderConfigEventsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

Configuration for events used in the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#events_config CustomerprofilesRecommender#events_config}

---

### CustomerprofilesRecommenderRecommenderConfigEventsConfig <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

const customerprofilesRecommenderRecommenderConfigEventsConfig: customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.property.eventParametersList">eventParametersList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]</code> | List of event parameters with their value thresholds. |

---

##### `eventParametersList`<sup>Optional</sup> <a name="eventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.property.eventParametersList"></a>

```typescript
public readonly eventParametersList: IResolvable | CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]

List of event parameters with their value thresholds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#event_parameters_list CustomerprofilesRecommender#event_parameters_list}

---

### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

const customerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct: customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventType">eventType</a></code> | <code>string</code> | The type of event. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventValueThreshold">eventValueThreshold</a></code> | <code>number</code> | The threshold of the event type. |

---

##### `eventType`<sup>Optional</sup> <a name="eventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

The type of event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#event_type CustomerprofilesRecommender#event_type}

---

##### `eventValueThreshold`<sup>Optional</sup> <a name="eventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventValueThreshold"></a>

```typescript
public readonly eventValueThreshold: number;
```

- *Type:* number

The threshold of the event type.

Only events with a value greater or equal to this threshold will be considered for solution creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#event_value_threshold CustomerprofilesRecommender#event_value_threshold}

---

### CustomerprofilesRecommenderTags <a name="CustomerprofilesRecommenderTags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

const customerprofilesRecommenderTags: customerprofilesRecommender.CustomerprofilesRecommenderTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#key CustomerprofilesRecommender#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#value CustomerprofilesRecommender#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#key CustomerprofilesRecommender#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_recommender#value CustomerprofilesRecommender#value}.

---

### CustomerprofilesRecommenderTrainingMetrics <a name="CustomerprofilesRecommenderTrainingMetrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

const customerprofilesRecommenderTrainingMetrics: customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics = { ... }
```


### CustomerprofilesRecommenderTrainingMetricsMetrics <a name="CustomerprofilesRecommenderTrainingMetricsMetrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

const customerprofilesRecommenderTrainingMetricsMetrics: customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationDateTime">creationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.lastUpdatedDateTime">lastUpdatedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.recommenderConfig">recommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate">CustomerprofilesRecommenderLatestRecommenderUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationDateTime`<sup>Required</sup> <a name="creationDateTime" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationDateTime"></a>

```typescript
public readonly creationDateTime: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="lastUpdatedDateTime" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.lastUpdatedDateTime"></a>

```typescript
public readonly lastUpdatedDateTime: string;
```

- *Type:* string

---

##### `recommenderConfig`<sup>Required</sup> <a name="recommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.recommenderConfig"></a>

```typescript
public readonly recommenderConfig: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesRecommenderLatestRecommenderUpdate;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate">CustomerprofilesRecommenderLatestRecommenderUpdate</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get"></a>

```typescript
public get(index: number): CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold">eventValueThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `eventValueThreshold`<sup>Required</sup> <a name="eventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold"></a>

```typescript
public readonly eventValueThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.eventParametersList">eventParametersList</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventParametersList`<sup>Required</sup> <a name="eventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.eventParametersList"></a>

```typescript
public readonly eventParametersList: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.eventsConfig">eventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventsConfig`<sup>Required</sup> <a name="eventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.eventsConfig"></a>

```typescript
public readonly eventsConfig: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig</a>

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get"></a>

```typescript
public get(index: number): CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventType">resetEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventValueThreshold">resetEventValueThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventType` <a name="resetEventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventType"></a>

```typescript
public resetEventType(): void
```

##### `resetEventValueThreshold` <a name="resetEventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventValueThreshold"></a>

```typescript
public resetEventValueThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThresholdInput">eventValueThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold">eventValueThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `eventValueThresholdInput`<sup>Optional</sup> <a name="eventValueThresholdInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThresholdInput"></a>

```typescript
public readonly eventValueThresholdInput: number;
```

- *Type:* number

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `eventValueThreshold`<sup>Required</sup> <a name="eventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold"></a>

```typescript
public readonly eventValueThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList">putEventParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resetEventParametersList">resetEventParametersList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEventParametersList` <a name="putEventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList"></a>

```typescript
public putEventParametersList(value: IResolvable | CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]

---

##### `resetEventParametersList` <a name="resetEventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resetEventParametersList"></a>

```typescript
public resetEventParametersList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersList">eventParametersList</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersListInput">eventParametersListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventParametersList`<sup>Required</sup> <a name="eventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersList"></a>

```typescript
public readonly eventParametersList: CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList</a>

---

##### `eventParametersListInput`<sup>Optional</sup> <a name="eventParametersListInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersListInput"></a>

```typescript
public readonly eventParametersListInput: IResolvable | CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesRecommenderRecommenderConfigEventsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

---


### CustomerprofilesRecommenderRecommenderConfigOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig">putEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resetEventsConfig">resetEventsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEventsConfig` <a name="putEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig"></a>

```typescript
public putEventsConfig(value: CustomerprofilesRecommenderRecommenderConfigEventsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

---

##### `resetEventsConfig` <a name="resetEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resetEventsConfig"></a>

```typescript
public resetEventsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfig">eventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfigInput">eventsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventsConfig`<sup>Required</sup> <a name="eventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfig"></a>

```typescript
public readonly eventsConfig: CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference</a>

---

##### `eventsConfigInput`<sup>Optional</sup> <a name="eventsConfigInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfigInput"></a>

```typescript
public readonly eventsConfigInput: IResolvable | CustomerprofilesRecommenderRecommenderConfigEventsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesRecommenderRecommenderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

---


### CustomerprofilesRecommenderTagsList <a name="CustomerprofilesRecommenderTagsList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get"></a>

```typescript
public get(index: number): CustomerprofilesRecommenderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesRecommenderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]

---


### CustomerprofilesRecommenderTagsOutputReference <a name="CustomerprofilesRecommenderTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesRecommenderTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>

---


### CustomerprofilesRecommenderTrainingMetricsList <a name="CustomerprofilesRecommenderTrainingMetricsList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get"></a>

```typescript
public get(index: number): CustomerprofilesRecommenderTrainingMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference <a name="CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.coverage">coverage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.freshness">freshness</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.hit">hit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.popularity">popularity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.recall">recall</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.similarity">similarity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics">CustomerprofilesRecommenderTrainingMetricsMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coverage`<sup>Required</sup> <a name="coverage" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.coverage"></a>

```typescript
public readonly coverage: number;
```

- *Type:* number

---

##### `freshness`<sup>Required</sup> <a name="freshness" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.freshness"></a>

```typescript
public readonly freshness: number;
```

- *Type:* number

---

##### `hit`<sup>Required</sup> <a name="hit" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.hit"></a>

```typescript
public readonly hit: number;
```

- *Type:* number

---

##### `popularity`<sup>Required</sup> <a name="popularity" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.popularity"></a>

```typescript
public readonly popularity: number;
```

- *Type:* number

---

##### `recall`<sup>Required</sup> <a name="recall" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.recall"></a>

```typescript
public readonly recall: number;
```

- *Type:* number

---

##### `similarity`<sup>Required</sup> <a name="similarity" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.similarity"></a>

```typescript
public readonly similarity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesRecommenderTrainingMetricsMetrics;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics">CustomerprofilesRecommenderTrainingMetricsMetrics</a>

---


### CustomerprofilesRecommenderTrainingMetricsOutputReference <a name="CustomerprofilesRecommenderTrainingMetricsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer"></a>

```typescript
import { customerprofilesRecommender } from '@cdktn/provider-awscc'

new customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference">CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics">CustomerprofilesRecommenderTrainingMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.metrics"></a>

```typescript
public readonly metrics: CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference">CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference</a>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomerprofilesRecommenderTrainingMetrics;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics">CustomerprofilesRecommenderTrainingMetrics</a>

---



