# `cleanroomsPrivacyBudgetTemplate` Submodule <a name="`cleanroomsPrivacyBudgetTemplate` Submodule" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsPrivacyBudgetTemplate <a name="CleanroomsPrivacyBudgetTemplate" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template awscc_cleanrooms_privacy_budget_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate(scope: Construct, id: string, config: CleanroomsPrivacyBudgetTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig">CleanroomsPrivacyBudgetTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig">CleanroomsPrivacyBudgetTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters"></a>

```typescript
public putParameters(value: CleanroomsPrivacyBudgetTemplateParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags"></a>

```typescript
public putTags(value: IResolvable | CleanroomsPrivacyBudgetTemplateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsPrivacyBudgetTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsPrivacyBudgetTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsPrivacyBudgetTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationArn">collaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier">collaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipArn">membershipArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference">CleanroomsPrivacyBudgetTemplateParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier">privacyBudgetTemplateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList">CleanroomsPrivacyBudgetTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefreshInput">autoRefreshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifierInput">membershipIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTypeInput">privacyBudgetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifier">membershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetType">privacyBudgetType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `collaborationArn`<sup>Required</sup> <a name="collaborationArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationArn"></a>

```typescript
public readonly collaborationArn: string;
```

- *Type:* string

---

##### `collaborationIdentifier`<sup>Required</sup> <a name="collaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier"></a>

```typescript
public readonly collaborationIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `membershipArn`<sup>Required</sup> <a name="membershipArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipArn"></a>

```typescript
public readonly membershipArn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parameters"></a>

```typescript
public readonly parameters: CleanroomsPrivacyBudgetTemplateParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference">CleanroomsPrivacyBudgetTemplateParametersOutputReference</a>

---

##### `privacyBudgetTemplateIdentifier`<sup>Required</sup> <a name="privacyBudgetTemplateIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier"></a>

```typescript
public readonly privacyBudgetTemplateIdentifier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tags"></a>

```typescript
public readonly tags: CleanroomsPrivacyBudgetTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList">CleanroomsPrivacyBudgetTemplateTagsList</a>

---

##### `autoRefreshInput`<sup>Optional</sup> <a name="autoRefreshInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefreshInput"></a>

```typescript
public readonly autoRefreshInput: string;
```

- *Type:* string

---

##### `membershipIdentifierInput`<sup>Optional</sup> <a name="membershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifierInput"></a>

```typescript
public readonly membershipIdentifierInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | CleanroomsPrivacyBudgetTemplateParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---

##### `privacyBudgetTypeInput`<sup>Optional</sup> <a name="privacyBudgetTypeInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetTypeInput"></a>

```typescript
public readonly privacyBudgetTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CleanroomsPrivacyBudgetTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.membershipIdentifier"></a>

```typescript
public readonly membershipIdentifier: string;
```

- *Type:* string

---

##### `privacyBudgetType`<sup>Required</sup> <a name="privacyBudgetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.privacyBudgetType"></a>

```typescript
public readonly privacyBudgetType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsPrivacyBudgetTemplateConfig <a name="CleanroomsPrivacyBudgetTemplateConfig" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.Initializer"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

const cleanroomsPrivacyBudgetTemplateConfig: cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.membershipIdentifier">membershipIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.privacyBudgetType">privacyBudgetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.membershipIdentifier"></a>

```typescript
public readonly membershipIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#membership_identifier CleanroomsPrivacyBudgetTemplate#membership_identifier}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.parameters"></a>

```typescript
public readonly parameters: CleanroomsPrivacyBudgetTemplateParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#parameters CleanroomsPrivacyBudgetTemplate#parameters}.

---

##### `privacyBudgetType`<sup>Required</sup> <a name="privacyBudgetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.privacyBudgetType"></a>

```typescript
public readonly privacyBudgetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#privacy_budget_type CleanroomsPrivacyBudgetTemplate#privacy_budget_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CleanroomsPrivacyBudgetTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]

An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#tags CleanroomsPrivacyBudgetTemplate#tags}

---

### CleanroomsPrivacyBudgetTemplateParameters <a name="CleanroomsPrivacyBudgetTemplateParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.Initializer"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

const cleanroomsPrivacyBudgetTemplateParameters: cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.budgetParameters">budgetParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CleanroomsPrivacyBudgetTemplate#budget_parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.epsilon">epsilon</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CleanroomsPrivacyBudgetTemplate#epsilon}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CleanroomsPrivacyBudgetTemplate#resource_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.usersNoisePerQuery">usersNoisePerQuery</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CleanroomsPrivacyBudgetTemplate#users_noise_per_query}. |

---

##### `budgetParameters`<sup>Optional</sup> <a name="budgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.budgetParameters"></a>

```typescript
public readonly budgetParameters: IResolvable | CleanroomsPrivacyBudgetTemplateParametersBudgetParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#budget_parameters CleanroomsPrivacyBudgetTemplate#budget_parameters}.

---

##### `epsilon`<sup>Optional</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.epsilon"></a>

```typescript
public readonly epsilon: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#epsilon CleanroomsPrivacyBudgetTemplate#epsilon}.

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#resource_arn CleanroomsPrivacyBudgetTemplate#resource_arn}.

---

##### `usersNoisePerQuery`<sup>Optional</sup> <a name="usersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters.property.usersNoisePerQuery"></a>

```typescript
public readonly usersNoisePerQuery: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#users_noise_per_query CleanroomsPrivacyBudgetTemplate#users_noise_per_query}.

---

### CleanroomsPrivacyBudgetTemplateParametersBudgetParameters <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.Initializer"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

const cleanroomsPrivacyBudgetTemplateParametersBudgetParameters: cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.budget">budget</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#budget CleanroomsPrivacyBudgetTemplate#budget}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#type CleanroomsPrivacyBudgetTemplate#type}. |

---

##### `autoRefresh`<sup>Optional</sup> <a name="autoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#auto_refresh CleanroomsPrivacyBudgetTemplate#auto_refresh}.

---

##### `budget`<sup>Optional</sup> <a name="budget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.budget"></a>

```typescript
public readonly budget: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#budget CleanroomsPrivacyBudgetTemplate#budget}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#type CleanroomsPrivacyBudgetTemplate#type}.

---

### CleanroomsPrivacyBudgetTemplateTags <a name="CleanroomsPrivacyBudgetTemplateTags" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.Initializer"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

const cleanroomsPrivacyBudgetTemplateTags: cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#key CleanroomsPrivacyBudgetTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#value CleanroomsPrivacyBudgetTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#key CleanroomsPrivacyBudgetTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_privacy_budget_template#value CleanroomsPrivacyBudgetTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get"></a>

```typescript
public get(index: number): CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsPrivacyBudgetTemplateParametersBudgetParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]

---


### CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference <a name="CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetAutoRefresh">resetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetBudget">resetBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRefresh` <a name="resetAutoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetAutoRefresh"></a>

```typescript
public resetAutoRefresh(): void
```

##### `resetBudget` <a name="resetBudget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetBudget"></a>

```typescript
public resetBudget(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefreshInput">autoRefreshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budgetInput">budgetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget">budget</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRefreshInput`<sup>Optional</sup> <a name="autoRefreshInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefreshInput"></a>

```typescript
public readonly autoRefreshInput: string;
```

- *Type:* string

---

##### `budgetInput`<sup>Optional</sup> <a name="budgetInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budgetInput"></a>

```typescript
public readonly budgetInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

---

##### `budget`<sup>Required</sup> <a name="budget" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget"></a>

```typescript
public readonly budget: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsPrivacyBudgetTemplateParametersBudgetParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>

---


### CleanroomsPrivacyBudgetTemplateParametersOutputReference <a name="CleanroomsPrivacyBudgetTemplateParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters">putBudgetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetBudgetParameters">resetBudgetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetEpsilon">resetEpsilon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetUsersNoisePerQuery">resetUsersNoisePerQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBudgetParameters` <a name="putBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters"></a>

```typescript
public putBudgetParameters(value: IResolvable | CleanroomsPrivacyBudgetTemplateParametersBudgetParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.putBudgetParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]

---

##### `resetBudgetParameters` <a name="resetBudgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetBudgetParameters"></a>

```typescript
public resetBudgetParameters(): void
```

##### `resetEpsilon` <a name="resetEpsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetEpsilon"></a>

```typescript
public resetEpsilon(): void
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetResourceArn"></a>

```typescript
public resetResourceArn(): void
```

##### `resetUsersNoisePerQuery` <a name="resetUsersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.resetUsersNoisePerQuery"></a>

```typescript
public resetUsersNoisePerQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters">budgetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParametersInput">budgetParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilonInput">epsilonInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQueryInput">usersNoisePerQueryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon">epsilon</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery">usersNoisePerQuery</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `budgetParameters`<sup>Required</sup> <a name="budgetParameters" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters"></a>

```typescript
public readonly budgetParameters: CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">CleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a>

---

##### `budgetParametersInput`<sup>Optional</sup> <a name="budgetParametersInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParametersInput"></a>

```typescript
public readonly budgetParametersInput: IResolvable | CleanroomsPrivacyBudgetTemplateParametersBudgetParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersBudgetParameters">CleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>[]

---

##### `epsilonInput`<sup>Optional</sup> <a name="epsilonInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilonInput"></a>

```typescript
public readonly epsilonInput: number;
```

- *Type:* number

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `usersNoisePerQueryInput`<sup>Optional</sup> <a name="usersNoisePerQueryInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQueryInput"></a>

```typescript
public readonly usersNoisePerQueryInput: number;
```

- *Type:* number

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon"></a>

```typescript
public readonly epsilon: number;
```

- *Type:* number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `usersNoisePerQuery`<sup>Required</sup> <a name="usersNoisePerQuery" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery"></a>

```typescript
public readonly usersNoisePerQuery: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsPrivacyBudgetTemplateParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateParameters">CleanroomsPrivacyBudgetTemplateParameters</a>

---


### CleanroomsPrivacyBudgetTemplateTagsList <a name="CleanroomsPrivacyBudgetTemplateTagsList" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get"></a>

```typescript
public get(index: number): CleanroomsPrivacyBudgetTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsPrivacyBudgetTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>[]

---


### CleanroomsPrivacyBudgetTemplateTagsOutputReference <a name="CleanroomsPrivacyBudgetTemplateTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer"></a>

```typescript
import { cleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsPrivacyBudgetTemplateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsPrivacyBudgetTemplate.CleanroomsPrivacyBudgetTemplateTags">CleanroomsPrivacyBudgetTemplateTags</a>

---



