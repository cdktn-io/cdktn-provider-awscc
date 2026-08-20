# `braketSpendingLimit` Submodule <a name="`braketSpendingLimit` Submodule" id="@cdktn/provider-awscc.braketSpendingLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BraketSpendingLimit <a name="BraketSpendingLimit" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit awscc_braket_spending_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer"></a>

```typescript
import { braketSpendingLimit } from '@cdktn/provider-awscc'

new braketSpendingLimit.BraketSpendingLimit(scope: Construct, id: string, config: BraketSpendingLimitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig">BraketSpendingLimitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig">BraketSpendingLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTimePeriod">putTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTimePeriod">resetTimePeriod</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTags"></a>

```typescript
public putTags(value: IResolvable | BraketSpendingLimitTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]

---

##### `putTimePeriod` <a name="putTimePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTimePeriod"></a>

```typescript
public putTimePeriod(value: BraketSpendingLimitTimePeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimePeriod` <a name="resetTimePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTimePeriod"></a>

```typescript
public resetTimePeriod(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BraketSpendingLimit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isConstruct"></a>

```typescript
import { braketSpendingLimit } from '@cdktn/provider-awscc'

braketSpendingLimit.BraketSpendingLimit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformElement"></a>

```typescript
import { braketSpendingLimit } from '@cdktn/provider-awscc'

braketSpendingLimit.BraketSpendingLimit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformResource"></a>

```typescript
import { braketSpendingLimit } from '@cdktn/provider-awscc'

braketSpendingLimit.BraketSpendingLimit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport"></a>

```typescript
import { braketSpendingLimit } from '@cdktn/provider-awscc'

braketSpendingLimit.BraketSpendingLimit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BraketSpendingLimit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BraketSpendingLimit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BraketSpendingLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BraketSpendingLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.queuedSpend">queuedSpend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitArn">spendingLimitArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList">BraketSpendingLimitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference">BraketSpendingLimitTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.totalSpend">totalSpend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArnInput">deviceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitInput">spendingLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriodInput">timePeriodInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArn">deviceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimit">spendingLimit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `queuedSpend`<sup>Required</sup> <a name="queuedSpend" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.queuedSpend"></a>

```typescript
public readonly queuedSpend: string;
```

- *Type:* string

---

##### `spendingLimitArn`<sup>Required</sup> <a name="spendingLimitArn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitArn"></a>

```typescript
public readonly spendingLimitArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tags"></a>

```typescript
public readonly tags: BraketSpendingLimitTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList">BraketSpendingLimitTagsList</a>

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriod"></a>

```typescript
public readonly timePeriod: BraketSpendingLimitTimePeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference">BraketSpendingLimitTimePeriodOutputReference</a>

---

##### `totalSpend`<sup>Required</sup> <a name="totalSpend" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.totalSpend"></a>

```typescript
public readonly totalSpend: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `deviceArnInput`<sup>Optional</sup> <a name="deviceArnInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArnInput"></a>

```typescript
public readonly deviceArnInput: string;
```

- *Type:* string

---

##### `spendingLimitInput`<sup>Optional</sup> <a name="spendingLimitInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitInput"></a>

```typescript
public readonly spendingLimitInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BraketSpendingLimitTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]

---

##### `timePeriodInput`<sup>Optional</sup> <a name="timePeriodInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriodInput"></a>

```typescript
public readonly timePeriodInput: IResolvable | BraketSpendingLimitTimePeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

---

##### `deviceArn`<sup>Required</sup> <a name="deviceArn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArn"></a>

```typescript
public readonly deviceArn: string;
```

- *Type:* string

---

##### `spendingLimit`<sup>Required</sup> <a name="spendingLimit" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimit"></a>

```typescript
public readonly spendingLimit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BraketSpendingLimitConfig <a name="BraketSpendingLimitConfig" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.Initializer"></a>

```typescript
import { braketSpendingLimit } from '@cdktn/provider-awscc'

const braketSpendingLimitConfig: braketSpendingLimit.BraketSpendingLimitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.deviceArn">deviceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.spendingLimit">spendingLimit</a></code> | <code>string</code> | The maximum amount that can be spent on the specified device, in USD. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]</code> | The tags to apply to the spending limit. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a></code> | Defines a time range for spending limits, specifying when the limit is active. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deviceArn`<sup>Required</sup> <a name="deviceArn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.deviceArn"></a>

```typescript
public readonly deviceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#device_arn BraketSpendingLimit#device_arn}

---

##### `spendingLimit`<sup>Required</sup> <a name="spendingLimit" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.spendingLimit"></a>

```typescript
public readonly spendingLimit: string;
```

- *Type:* string

The maximum amount that can be spent on the specified device, in USD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#spending_limit BraketSpendingLimit#spending_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BraketSpendingLimitTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]

The tags to apply to the spending limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#tags BraketSpendingLimit#tags}

---

##### `timePeriod`<sup>Optional</sup> <a name="timePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.timePeriod"></a>

```typescript
public readonly timePeriod: BraketSpendingLimitTimePeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

Defines a time range for spending limits, specifying when the limit is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#time_period BraketSpendingLimit#time_period}

---

### BraketSpendingLimitTags <a name="BraketSpendingLimitTags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.Initializer"></a>

```typescript
import { braketSpendingLimit } from '@cdktn/provider-awscc'

const braketSpendingLimitTags: braketSpendingLimit.BraketSpendingLimitTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#key BraketSpendingLimit#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#value BraketSpendingLimit#value}

---

### BraketSpendingLimitTimePeriod <a name="BraketSpendingLimitTimePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.Initializer"></a>

```typescript
import { braketSpendingLimit } from '@cdktn/provider-awscc'

const braketSpendingLimitTimePeriod: braketSpendingLimit.BraketSpendingLimitTimePeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.endAt">endAt</a></code> | <code>string</code> | The end date and time for the spending limit period, in ISO 8601 format. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.startAt">startAt</a></code> | <code>string</code> | The start date and time for the spending limit period, in ISO 8601 format. |

---

##### `endAt`<sup>Optional</sup> <a name="endAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.endAt"></a>

```typescript
public readonly endAt: string;
```

- *Type:* string

The end date and time for the spending limit period, in ISO 8601 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#end_at BraketSpendingLimit#end_at}

---

##### `startAt`<sup>Optional</sup> <a name="startAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.startAt"></a>

```typescript
public readonly startAt: string;
```

- *Type:* string

The start date and time for the spending limit period, in ISO 8601 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#start_at BraketSpendingLimit#start_at}

---

## Classes <a name="Classes" id="Classes"></a>

### BraketSpendingLimitTagsList <a name="BraketSpendingLimitTagsList" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer"></a>

```typescript
import { braketSpendingLimit } from '@cdktn/provider-awscc'

new braketSpendingLimit.BraketSpendingLimitTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.get"></a>

```typescript
public get(index: number): BraketSpendingLimitTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BraketSpendingLimitTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]

---


### BraketSpendingLimitTagsOutputReference <a name="BraketSpendingLimitTagsOutputReference" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer"></a>

```typescript
import { braketSpendingLimit } from '@cdktn/provider-awscc'

new braketSpendingLimit.BraketSpendingLimitTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BraketSpendingLimitTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>

---


### BraketSpendingLimitTimePeriodOutputReference <a name="BraketSpendingLimitTimePeriodOutputReference" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer"></a>

```typescript
import { braketSpendingLimit } from '@cdktn/provider-awscc'

new braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetEndAt">resetEndAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetStartAt">resetStartAt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndAt` <a name="resetEndAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetEndAt"></a>

```typescript
public resetEndAt(): void
```

##### `resetStartAt` <a name="resetStartAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetStartAt"></a>

```typescript
public resetStartAt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAtInput">endAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAtInput">startAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAt">endAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAt">startAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endAtInput`<sup>Optional</sup> <a name="endAtInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAtInput"></a>

```typescript
public readonly endAtInput: string;
```

- *Type:* string

---

##### `startAtInput`<sup>Optional</sup> <a name="startAtInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAtInput"></a>

```typescript
public readonly startAtInput: string;
```

- *Type:* string

---

##### `endAt`<sup>Required</sup> <a name="endAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAt"></a>

```typescript
public readonly endAt: string;
```

- *Type:* string

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAt"></a>

```typescript
public readonly startAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BraketSpendingLimitTimePeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

---



