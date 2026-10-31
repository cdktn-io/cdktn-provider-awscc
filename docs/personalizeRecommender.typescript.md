# `personalizeRecommender` Submodule <a name="`personalizeRecommender` Submodule" id="@cdktn/provider-awscc.personalizeRecommender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeRecommender <a name="PersonalizeRecommender" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender awscc_personalize_recommender}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

new personalizeRecommender.PersonalizeRecommender(scope: Construct, id: string, config: PersonalizeRecommenderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig">PersonalizeRecommenderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig">PersonalizeRecommenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig">putRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetRecommenderConfig">resetRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecommenderConfig` <a name="putRecommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig"></a>

```typescript
public putRecommenderConfig(value: PersonalizeRecommenderRecommenderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putTags"></a>

```typescript
public putTags(value: IResolvable | PersonalizeRecommenderTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>[]

---

##### `resetRecommenderConfig` <a name="resetRecommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetRecommenderConfig"></a>

```typescript
public resetRecommenderConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeRecommender resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isConstruct"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

personalizeRecommender.PersonalizeRecommender.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformElement"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

personalizeRecommender.PersonalizeRecommender.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformResource"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

personalizeRecommender.PersonalizeRecommender.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

personalizeRecommender.PersonalizeRecommender.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PersonalizeRecommender resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersonalizeRecommender to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersonalizeRecommender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeRecommender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.creationDateTime">creationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lastUpdatedDateTime">lastUpdatedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderArn">recommenderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfig">recommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference">PersonalizeRecommenderRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList">PersonalizeRecommenderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArnInput">datasetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArnInput">recipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfigInput">recommenderConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArn">datasetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArn">recipeArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationDateTime`<sup>Required</sup> <a name="creationDateTime" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.creationDateTime"></a>

```typescript
public readonly creationDateTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="lastUpdatedDateTime" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lastUpdatedDateTime"></a>

```typescript
public readonly lastUpdatedDateTime: string;
```

- *Type:* string

---

##### `recommenderArn`<sup>Required</sup> <a name="recommenderArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderArn"></a>

```typescript
public readonly recommenderArn: string;
```

- *Type:* string

---

##### `recommenderConfig`<sup>Required</sup> <a name="recommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfig"></a>

```typescript
public readonly recommenderConfig: PersonalizeRecommenderRecommenderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference">PersonalizeRecommenderRecommenderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tags"></a>

```typescript
public readonly tags: PersonalizeRecommenderTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList">PersonalizeRecommenderTagsList</a>

---

##### `datasetGroupArnInput`<sup>Optional</sup> <a name="datasetGroupArnInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArnInput"></a>

```typescript
public readonly datasetGroupArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recipeArnInput`<sup>Optional</sup> <a name="recipeArnInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArnInput"></a>

```typescript
public readonly recipeArnInput: string;
```

- *Type:* string

---

##### `recommenderConfigInput`<sup>Optional</sup> <a name="recommenderConfigInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfigInput"></a>

```typescript
public readonly recommenderConfigInput: IResolvable | PersonalizeRecommenderRecommenderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | PersonalizeRecommenderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>[]

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArn"></a>

```typescript
public readonly datasetGroupArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recipeArn`<sup>Required</sup> <a name="recipeArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArn"></a>

```typescript
public readonly recipeArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeRecommenderConfig <a name="PersonalizeRecommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.Initializer"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

const personalizeRecommenderConfig: personalizeRecommender.PersonalizeRecommenderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.datasetGroupArn">datasetGroupArn</a></code> | <code>string</code> | The ARN of the Domain dataset group that the recommender is created for. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.name">name</a></code> | <code>string</code> | The name of the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recipeArn">recipeArn</a></code> | <code>string</code> | The ARN of the recipe (Domain dataset group use case) that the recommender uses. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recommenderConfig">recommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a></code> | The configuration details of the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>[]</code> | Tags to associate with the recommender. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.datasetGroupArn"></a>

```typescript
public readonly datasetGroupArn: string;
```

- *Type:* string

The ARN of the Domain dataset group that the recommender is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#dataset_group_arn PersonalizeRecommender#dataset_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#name PersonalizeRecommender#name}

---

##### `recipeArn`<sup>Required</sup> <a name="recipeArn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recipeArn"></a>

```typescript
public readonly recipeArn: string;
```

- *Type:* string

The ARN of the recipe (Domain dataset group use case) that the recommender uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#recipe_arn PersonalizeRecommender#recipe_arn}

---

##### `recommenderConfig`<sup>Optional</sup> <a name="recommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recommenderConfig"></a>

```typescript
public readonly recommenderConfig: PersonalizeRecommenderRecommenderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

The configuration details of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#recommender_config PersonalizeRecommender#recommender_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | PersonalizeRecommenderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>[]

Tags to associate with the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#tags PersonalizeRecommender#tags}

---

### PersonalizeRecommenderRecommenderConfig <a name="PersonalizeRecommenderRecommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.Initializer"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

const personalizeRecommenderRecommenderConfig: personalizeRecommender.PersonalizeRecommenderRecommenderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.enableMetadataWithRecommendations">enableMetadataWithRecommendations</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether metadata with recommendations is enabled for the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.itemExplorationConfig">itemExplorationConfig</a></code> | <code>{[ key: string ]: string}</code> | Specifies the exploration configuration hyperparameters. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.minRecommendationRequestsPerSecond">minRecommendationRequestsPerSecond</a></code> | <code>number</code> | Specifies the requested minimum provisioned recommendation requests per second. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.trainingDataConfig">trainingDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a></code> | The training data configuration to use when creating a domain recommender. |

---

##### `enableMetadataWithRecommendations`<sup>Optional</sup> <a name="enableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.enableMetadataWithRecommendations"></a>

```typescript
public readonly enableMetadataWithRecommendations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether metadata with recommendations is enabled for the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#enable_metadata_with_recommendations PersonalizeRecommender#enable_metadata_with_recommendations}

---

##### `itemExplorationConfig`<sup>Optional</sup> <a name="itemExplorationConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.itemExplorationConfig"></a>

```typescript
public readonly itemExplorationConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies the exploration configuration hyperparameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#item_exploration_config PersonalizeRecommender#item_exploration_config}

---

##### `minRecommendationRequestsPerSecond`<sup>Optional</sup> <a name="minRecommendationRequestsPerSecond" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.minRecommendationRequestsPerSecond"></a>

```typescript
public readonly minRecommendationRequestsPerSecond: number;
```

- *Type:* number

Specifies the requested minimum provisioned recommendation requests per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#min_recommendation_requests_per_second PersonalizeRecommender#min_recommendation_requests_per_second}

---

##### `trainingDataConfig`<sup>Optional</sup> <a name="trainingDataConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.trainingDataConfig"></a>

```typescript
public readonly trainingDataConfig: PersonalizeRecommenderRecommenderConfigTrainingDataConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

The training data configuration to use when creating a domain recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#training_data_config PersonalizeRecommender#training_data_config}

---

### PersonalizeRecommenderRecommenderConfigTrainingDataConfig <a name="PersonalizeRecommenderRecommenderConfigTrainingDataConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig.Initializer"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

const personalizeRecommenderRecommenderConfigTrainingDataConfig: personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig.property.excludedDatasetColumns">excludedDatasetColumns</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | Specifies the columns to exclude from training. |

---

##### `excludedDatasetColumns`<sup>Optional</sup> <a name="excludedDatasetColumns" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig.property.excludedDatasetColumns"></a>

```typescript
public readonly excludedDatasetColumns: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

Specifies the columns to exclude from training.

Each key is a dataset type, and each value is a list of columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#excluded_dataset_columns PersonalizeRecommender#excluded_dataset_columns}

---

### PersonalizeRecommenderTags <a name="PersonalizeRecommenderTags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.Initializer"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

const personalizeRecommenderTags: personalizeRecommender.PersonalizeRecommenderTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#key PersonalizeRecommender#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#value PersonalizeRecommender#value}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeRecommenderRecommenderConfigOutputReference <a name="PersonalizeRecommenderRecommenderConfigOutputReference" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

new personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.putTrainingDataConfig">putTrainingDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetEnableMetadataWithRecommendations">resetEnableMetadataWithRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetItemExplorationConfig">resetItemExplorationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetMinRecommendationRequestsPerSecond">resetMinRecommendationRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetTrainingDataConfig">resetTrainingDataConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrainingDataConfig` <a name="putTrainingDataConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.putTrainingDataConfig"></a>

```typescript
public putTrainingDataConfig(value: PersonalizeRecommenderRecommenderConfigTrainingDataConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.putTrainingDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

---

##### `resetEnableMetadataWithRecommendations` <a name="resetEnableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetEnableMetadataWithRecommendations"></a>

```typescript
public resetEnableMetadataWithRecommendations(): void
```

##### `resetItemExplorationConfig` <a name="resetItemExplorationConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetItemExplorationConfig"></a>

```typescript
public resetItemExplorationConfig(): void
```

##### `resetMinRecommendationRequestsPerSecond` <a name="resetMinRecommendationRequestsPerSecond" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetMinRecommendationRequestsPerSecond"></a>

```typescript
public resetMinRecommendationRequestsPerSecond(): void
```

##### `resetTrainingDataConfig` <a name="resetTrainingDataConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetTrainingDataConfig"></a>

```typescript
public resetTrainingDataConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfig">trainingDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference">PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendationsInput">enableMetadataWithRecommendationsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfigInput">itemExplorationConfigInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecondInput">minRecommendationRequestsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfigInput">trainingDataConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendations">enableMetadataWithRecommendations</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfig">itemExplorationConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecond">minRecommendationRequestsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trainingDataConfig`<sup>Required</sup> <a name="trainingDataConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfig"></a>

```typescript
public readonly trainingDataConfig: PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference">PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference</a>

---

##### `enableMetadataWithRecommendationsInput`<sup>Optional</sup> <a name="enableMetadataWithRecommendationsInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendationsInput"></a>

```typescript
public readonly enableMetadataWithRecommendationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `itemExplorationConfigInput`<sup>Optional</sup> <a name="itemExplorationConfigInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfigInput"></a>

```typescript
public readonly itemExplorationConfigInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `minRecommendationRequestsPerSecondInput`<sup>Optional</sup> <a name="minRecommendationRequestsPerSecondInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecondInput"></a>

```typescript
public readonly minRecommendationRequestsPerSecondInput: number;
```

- *Type:* number

---

##### `trainingDataConfigInput`<sup>Optional</sup> <a name="trainingDataConfigInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfigInput"></a>

```typescript
public readonly trainingDataConfigInput: IResolvable | PersonalizeRecommenderRecommenderConfigTrainingDataConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

---

##### `enableMetadataWithRecommendations`<sup>Required</sup> <a name="enableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendations"></a>

```typescript
public readonly enableMetadataWithRecommendations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `itemExplorationConfig`<sup>Required</sup> <a name="itemExplorationConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfig"></a>

```typescript
public readonly itemExplorationConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `minRecommendationRequestsPerSecond`<sup>Required</sup> <a name="minRecommendationRequestsPerSecond" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecond"></a>

```typescript
public readonly minRecommendationRequestsPerSecond: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeRecommenderRecommenderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

---


### PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference <a name="PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

new personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resetExcludedDatasetColumns">resetExcludedDatasetColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedDatasetColumns` <a name="resetExcludedDatasetColumns" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resetExcludedDatasetColumns"></a>

```typescript
public resetExcludedDatasetColumns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumnsInput">excludedDatasetColumnsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumns">excludedDatasetColumns</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedDatasetColumnsInput`<sup>Optional</sup> <a name="excludedDatasetColumnsInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumnsInput"></a>

```typescript
public readonly excludedDatasetColumnsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `excludedDatasetColumns`<sup>Required</sup> <a name="excludedDatasetColumns" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumns"></a>

```typescript
public readonly excludedDatasetColumns: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeRecommenderRecommenderConfigTrainingDataConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

---


### PersonalizeRecommenderTagsList <a name="PersonalizeRecommenderTagsList" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

new personalizeRecommender.PersonalizeRecommenderTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.get"></a>

```typescript
public get(index: number): PersonalizeRecommenderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeRecommenderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>[]

---


### PersonalizeRecommenderTagsOutputReference <a name="PersonalizeRecommenderTagsOutputReference" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer"></a>

```typescript
import { personalizeRecommender } from '@cdktn/provider-awscc'

new personalizeRecommender.PersonalizeRecommenderTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeRecommenderTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>

---



