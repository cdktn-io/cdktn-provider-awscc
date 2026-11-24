# `lambdaRuntimeAlias` Submodule <a name="`lambdaRuntimeAlias` Submodule" id="@cdktn/provider-awscc.lambdaRuntimeAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaRuntimeAlias <a name="LambdaRuntimeAlias" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias awscc_lambda_runtime_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer"></a>

```typescript
import { lambdaRuntimeAlias } from '@cdktn/provider-awscc'

new lambdaRuntimeAlias.LambdaRuntimeAlias(scope: Construct, id: string, config: LambdaRuntimeAliasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig">LambdaRuntimeAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig">LambdaRuntimeAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle">putReleaseLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetReleaseLifecycle">resetReleaseLifecycle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReleaseLifecycle` <a name="putReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle"></a>

```typescript
public putReleaseLifecycle(value: LambdaRuntimeAliasReleaseLifecycle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetReleaseLifecycle` <a name="resetReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetReleaseLifecycle"></a>

```typescript
public resetReleaseLifecycle(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaRuntimeAlias resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct"></a>

```typescript
import { lambdaRuntimeAlias } from '@cdktn/provider-awscc'

lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement"></a>

```typescript
import { lambdaRuntimeAlias } from '@cdktn/provider-awscc'

lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource"></a>

```typescript
import { lambdaRuntimeAlias } from '@cdktn/provider-awscc'

lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport"></a>

```typescript
import { lambdaRuntimeAlias } from '@cdktn/provider-awscc'

lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdaRuntimeAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaRuntimeAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaRuntimeAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaRuntimeAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.compatibility">compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference">LambdaRuntimeAliasCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycle">releaseLifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference">LambdaRuntimeAliasReleaseLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionArn">runtimeVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycleInput">releaseLifecycleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeNameInput">runtimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeName">runtimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.compatibility"></a>

```typescript
public readonly compatibility: LambdaRuntimeAliasCompatibilityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference">LambdaRuntimeAliasCompatibilityOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `releaseLifecycle`<sup>Required</sup> <a name="releaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycle"></a>

```typescript
public readonly releaseLifecycle: LambdaRuntimeAliasReleaseLifecycleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference">LambdaRuntimeAliasReleaseLifecycleOutputReference</a>

---

##### `runtimeVersionArn`<sup>Required</sup> <a name="runtimeVersionArn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionArn"></a>

```typescript
public readonly runtimeVersionArn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `releaseLifecycleInput`<sup>Optional</sup> <a name="releaseLifecycleInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycleInput"></a>

```typescript
public readonly releaseLifecycleInput: IResolvable | LambdaRuntimeAliasReleaseLifecycle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

---

##### `runtimeNameInput`<sup>Optional</sup> <a name="runtimeNameInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeNameInput"></a>

```typescript
public readonly runtimeNameInput: string;
```

- *Type:* string

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtimeName`<sup>Required</sup> <a name="runtimeName" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeName"></a>

```typescript
public readonly runtimeName: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaRuntimeAliasCompatibility <a name="LambdaRuntimeAliasCompatibility" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility.Initializer"></a>

```typescript
import { lambdaRuntimeAlias } from '@cdktn/provider-awscc'

const lambdaRuntimeAliasCompatibility: lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility = { ... }
```


### LambdaRuntimeAliasConfig <a name="LambdaRuntimeAliasConfig" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.Initializer"></a>

```typescript
import { lambdaRuntimeAlias } from '@cdktn/provider-awscc'

const lambdaRuntimeAliasConfig: lambdaRuntimeAlias.LambdaRuntimeAliasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.name">name</a></code> | <code>string</code> | The alias name. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeName">runtimeName</a></code> | <code>string</code> | The name of the parent runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | The runtime version this alias points to. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.description">description</a></code> | <code>string</code> | A description of the runtime alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.releaseLifecycle">releaseLifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a></code> | The publisher's lifecycle declaration for the alias. Omitting it removes any stored declaration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#name LambdaRuntimeAlias#name}

---

##### `runtimeName`<sup>Required</sup> <a name="runtimeName" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeName"></a>

```typescript
public readonly runtimeName: string;
```

- *Type:* string

The name of the parent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_name LambdaRuntimeAlias#runtime_name}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

The runtime version this alias points to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_version LambdaRuntimeAlias#runtime_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the runtime alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#description LambdaRuntimeAlias#description}

---

##### `releaseLifecycle`<sup>Optional</sup> <a name="releaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.releaseLifecycle"></a>

```typescript
public readonly releaseLifecycle: LambdaRuntimeAliasReleaseLifecycle;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

The publisher's lifecycle declaration for the alias. Omitting it removes any stored declaration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_lifecycle LambdaRuntimeAlias#release_lifecycle}

---

### LambdaRuntimeAliasReleaseLifecycle <a name="LambdaRuntimeAliasReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.Initializer"></a>

```typescript
import { lambdaRuntimeAlias } from '@cdktn/provider-awscc'

const lambdaRuntimeAliasReleaseLifecycle: lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.deprecationDate">deprecationDate</a></code> | <code>string</code> | The date on which the alias becomes deprecated. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionCreateBlockDate">functionCreateBlockDate</a></code> | <code>string</code> | The date on which creating new functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionUpdateBlockDate">functionUpdateBlockDate</a></code> | <code>string</code> | The date on which updating existing functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.releaseState">releaseState</a></code> | <code>string</code> | The release state of the alias. |

---

##### `deprecationDate`<sup>Optional</sup> <a name="deprecationDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.deprecationDate"></a>

```typescript
public readonly deprecationDate: string;
```

- *Type:* string

The date on which the alias becomes deprecated. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#deprecation_date LambdaRuntimeAlias#deprecation_date}

---

##### `functionCreateBlockDate`<sup>Optional</sup> <a name="functionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionCreateBlockDate"></a>

```typescript
public readonly functionCreateBlockDate: string;
```

- *Type:* string

The date on which creating new functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_create_block_date LambdaRuntimeAlias#function_create_block_date}

---

##### `functionUpdateBlockDate`<sup>Optional</sup> <a name="functionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionUpdateBlockDate"></a>

```typescript
public readonly functionUpdateBlockDate: string;
```

- *Type:* string

The date on which updating existing functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_update_block_date LambdaRuntimeAlias#function_update_block_date}

---

##### `releaseState`<sup>Optional</sup> <a name="releaseState" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.releaseState"></a>

```typescript
public readonly releaseState: string;
```

- *Type:* string

The release state of the alias.

DEPRECATED requires a DeprecationDate on or before today (UTC); PREVIEW and GA require a later DeprecationDate, or none. Reads report DEPRECATED once DeprecationDate is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_state LambdaRuntimeAlias#release_state}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaRuntimeAliasCompatibilityOutputReference <a name="LambdaRuntimeAliasCompatibilityOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer"></a>

```typescript
import { lambdaRuntimeAlias } from '@cdktn/provider-awscc'

new lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.architectures">architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels">integrationModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances">managedInstances</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility">LambdaRuntimeAliasCompatibility</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

---

##### `integrationModels`<sup>Required</sup> <a name="integrationModels" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels"></a>

```typescript
public readonly integrationModels: string[];
```

- *Type:* string[]

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances"></a>

```typescript
public readonly managedInstances: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaRuntimeAliasCompatibility;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility">LambdaRuntimeAliasCompatibility</a>

---


### LambdaRuntimeAliasReleaseLifecycleOutputReference <a name="LambdaRuntimeAliasReleaseLifecycleOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer"></a>

```typescript
import { lambdaRuntimeAlias } from '@cdktn/provider-awscc'

new lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetDeprecationDate">resetDeprecationDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionCreateBlockDate">resetFunctionCreateBlockDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate">resetFunctionUpdateBlockDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetReleaseState">resetReleaseState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeprecationDate` <a name="resetDeprecationDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetDeprecationDate"></a>

```typescript
public resetDeprecationDate(): void
```

##### `resetFunctionCreateBlockDate` <a name="resetFunctionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionCreateBlockDate"></a>

```typescript
public resetFunctionCreateBlockDate(): void
```

##### `resetFunctionUpdateBlockDate` <a name="resetFunctionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate"></a>

```typescript
public resetFunctionUpdateBlockDate(): void
```

##### `resetReleaseState` <a name="resetReleaseState" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetReleaseState"></a>

```typescript
public resetReleaseState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDateInput">deprecationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDateInput">functionCreateBlockDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput">functionUpdateBlockDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseStateInput">releaseStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate">deprecationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate">functionCreateBlockDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate">functionUpdateBlockDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState">releaseState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deprecationDateInput`<sup>Optional</sup> <a name="deprecationDateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDateInput"></a>

```typescript
public readonly deprecationDateInput: string;
```

- *Type:* string

---

##### `functionCreateBlockDateInput`<sup>Optional</sup> <a name="functionCreateBlockDateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDateInput"></a>

```typescript
public readonly functionCreateBlockDateInput: string;
```

- *Type:* string

---

##### `functionUpdateBlockDateInput`<sup>Optional</sup> <a name="functionUpdateBlockDateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput"></a>

```typescript
public readonly functionUpdateBlockDateInput: string;
```

- *Type:* string

---

##### `releaseStateInput`<sup>Optional</sup> <a name="releaseStateInput" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseStateInput"></a>

```typescript
public readonly releaseStateInput: string;
```

- *Type:* string

---

##### `deprecationDate`<sup>Required</sup> <a name="deprecationDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate"></a>

```typescript
public readonly deprecationDate: string;
```

- *Type:* string

---

##### `functionCreateBlockDate`<sup>Required</sup> <a name="functionCreateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate"></a>

```typescript
public readonly functionCreateBlockDate: string;
```

- *Type:* string

---

##### `functionUpdateBlockDate`<sup>Required</sup> <a name="functionUpdateBlockDate" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate"></a>

```typescript
public readonly functionUpdateBlockDate: string;
```

- *Type:* string

---

##### `releaseState`<sup>Required</sup> <a name="releaseState" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState"></a>

```typescript
public readonly releaseState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaRuntimeAliasReleaseLifecycle;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

---



