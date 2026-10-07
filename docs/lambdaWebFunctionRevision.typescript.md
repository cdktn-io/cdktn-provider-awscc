# `lambdaWebFunctionRevision` Submodule <a name="`lambdaWebFunctionRevision` Submodule" id="@cdktn/provider-awscc.lambdaWebFunctionRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaWebFunctionRevision <a name="LambdaWebFunctionRevision" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision awscc_lambda_web_function_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new lambdaWebFunctionRevision.LambdaWebFunctionRevision(scope: Construct, id: string, config: LambdaWebFunctionRevisionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig">LambdaWebFunctionRevisionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig">LambdaWebFunctionRevisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig">putBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig">putServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildConfig` <a name="putBuildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig"></a>

```typescript
public putBuildConfig(value: LambdaWebFunctionRevisionBuildConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

---

##### `putServiceConfig` <a name="putServiceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig"></a>

```typescript
public putServiceConfig(value: LambdaWebFunctionRevisionServiceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaWebFunctionRevision to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaWebFunctionRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaWebFunctionRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference">LambdaWebFunctionRevisionBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionArn">revisionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference">LambdaWebFunctionRevisionServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.stateReason">stateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfigInput">buildConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfigInput">serviceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfig"></a>

```typescript
public readonly buildConfig: LambdaWebFunctionRevisionBuildConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference">LambdaWebFunctionRevisionBuildConfigOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `revisionArn`<sup>Required</sup> <a name="revisionArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionArn"></a>

```typescript
public readonly revisionArn: string;
```

- *Type:* string

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfig"></a>

```typescript
public readonly serviceConfig: LambdaWebFunctionRevisionServiceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference">LambdaWebFunctionRevisionServiceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

---

##### `buildConfigInput`<sup>Optional</sup> <a name="buildConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfigInput"></a>

```typescript
public readonly buildConfigInput: IResolvable | LambdaWebFunctionRevisionBuildConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `serviceConfigInput`<sup>Optional</sup> <a name="serviceConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfigInput"></a>

```typescript
public readonly serviceConfigInput: IResolvable | LambdaWebFunctionRevisionServiceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaWebFunctionRevisionBuildConfig <a name="LambdaWebFunctionRevisionBuildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const lambdaWebFunctionRevisionBuildConfig: lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.codeConfig">codeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | The code configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | The runtime configuration for the revision. |

---

##### `codeConfig`<sup>Required</sup> <a name="codeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.codeConfig"></a>

```typescript
public readonly codeConfig: LambdaWebFunctionRevisionBuildConfigCodeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

The code configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#code_config LambdaWebFunctionRevision#code_config}

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: LambdaWebFunctionRevisionBuildConfigRuntimeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

The runtime configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime_config LambdaWebFunctionRevision#runtime_config}

---

### LambdaWebFunctionRevisionBuildConfigCodeConfig <a name="LambdaWebFunctionRevisionBuildConfigCodeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const lambdaWebFunctionRevisionBuildConfigCodeConfig: lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.property.s3Object">s3Object</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | The Amazon S3 location of the deployment artifact. |

---

##### `s3Object`<sup>Required</sup> <a name="s3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.property.s3Object"></a>

```typescript
public readonly s3Object: LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

The Amazon S3 location of the deployment artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#s3_object LambdaWebFunctionRevision#s3_object}

---

### LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const lambdaWebFunctionRevisionBuildConfigCodeConfigS3Object: lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket">bucket</a></code> | <code>string</code> | The S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.key">key</a></code> | <code>string</code> | The S3 object key. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId">versionId</a></code> | <code>string</code> | The S3 object version ID. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#bucket LambdaWebFunctionRevision#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The S3 object key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#key LambdaWebFunctionRevision#key}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The S3 object version ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#version_id LambdaWebFunctionRevision#version_id}

---

### LambdaWebFunctionRevisionBuildConfigRuntimeConfig <a name="LambdaWebFunctionRevisionBuildConfigRuntimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const lambdaWebFunctionRevisionBuildConfigRuntimeConfig: lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.property.runtime">runtime</a></code> | <code>string</code> | The runtime identifier. |

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

The runtime identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime LambdaWebFunctionRevision#runtime}

---

### LambdaWebFunctionRevisionConfig <a name="LambdaWebFunctionRevisionConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const lambdaWebFunctionRevisionConfig: lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | The build configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.functionName">functionName</a></code> | <code>string</code> | The name of the web function this revision belongs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | The service configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.description">description</a></code> | <code>string</code> | A description of the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key used to encrypt the revision. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.buildConfig"></a>

```typescript
public readonly buildConfig: LambdaWebFunctionRevisionBuildConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

The build configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#build_config LambdaWebFunctionRevision#build_config}

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The name of the web function this revision belongs to.

The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#function_name LambdaWebFunctionRevision#function_name}

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.serviceConfig"></a>

```typescript
public readonly serviceConfig: LambdaWebFunctionRevisionServiceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

The service configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#service_config LambdaWebFunctionRevision#service_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#description LambdaWebFunctionRevision#description}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the KMS key used to encrypt the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#kms_key_arn LambdaWebFunctionRevision#kms_key_arn}

---

### LambdaWebFunctionRevisionServiceConfig <a name="LambdaWebFunctionRevisionServiceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const lambdaWebFunctionRevisionServiceConfig: lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | The ARN of the execution role. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Environment variables for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment">maxConcurrencyPerEnvironment</a></code> | <code>number</code> | The maximum concurrency per environment. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | The telemetry configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | The function timeout in seconds. |

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

The ARN of the execution role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#execution_role_arn LambdaWebFunctionRevision#execution_role_arn}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#environment_variables LambdaWebFunctionRevision#environment_variables}

---

##### `maxConcurrencyPerEnvironment`<sup>Optional</sup> <a name="maxConcurrencyPerEnvironment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment"></a>

```typescript
public readonly maxConcurrencyPerEnvironment: number;
```

- *Type:* number

The maximum concurrency per environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#max_concurrency_per_environment LambdaWebFunctionRevision#max_concurrency_per_environment}

---

##### `telemetryConfig`<sup>Optional</sup> <a name="telemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: LambdaWebFunctionRevisionServiceConfigTelemetryConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

The telemetry configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#telemetry_config LambdaWebFunctionRevision#telemetry_config}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

The function timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#timeout_seconds LambdaWebFunctionRevision#timeout_seconds}

---

### LambdaWebFunctionRevisionServiceConfigTelemetryConfig <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const lambdaWebFunctionRevisionServiceConfigTelemetryConfig: lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | The logging configuration for the web function. |

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

The logging configuration for the web function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#logging_config LambdaWebFunctionRevision#logging_config}

---

### LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

const lambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig: lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | The application log level. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup">logGroup</a></code> | <code>string</code> | The CloudWatch log group name. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | The system log level. |

---

##### `applicationLogLevel`<sup>Optional</sup> <a name="applicationLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string

The application log level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#application_log_level LambdaWebFunctionRevision#application_log_level}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

The CloudWatch log group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#log_group LambdaWebFunctionRevision#log_group}

---

##### `systemLogLevel`<sup>Optional</sup> <a name="systemLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string

The system log level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#system_log_level LambdaWebFunctionRevision#system_log_level}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object">putS3Object</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Object` <a name="putS3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object"></a>

```typescript
public putS3Object(value: LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object">s3Object</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput">s3ObjectInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Object`<sup>Required</sup> <a name="s3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object"></a>

```typescript
public readonly s3Object: LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a>

---

##### `s3ObjectInput`<sup>Optional</sup> <a name="s3ObjectInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput"></a>

```typescript
public readonly s3ObjectInput: IResolvable | LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaWebFunctionRevisionBuildConfigCodeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---


### LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId"></a>

```typescript
public resetVersionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


### LambdaWebFunctionRevisionBuildConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig">putCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig">putRuntimeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfig` <a name="putCodeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig"></a>

```typescript
public putCodeConfig(value: LambdaWebFunctionRevisionBuildConfigCodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---

##### `putRuntimeConfig` <a name="putRuntimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig"></a>

```typescript
public putRuntimeConfig(value: LambdaWebFunctionRevisionBuildConfigRuntimeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig">codeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput">codeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput">runtimeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeConfig`<sup>Required</sup> <a name="codeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig"></a>

```typescript
public readonly codeConfig: LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a>

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a>

---

##### `codeConfigInput`<sup>Optional</sup> <a name="codeConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput"></a>

```typescript
public readonly codeConfigInput: IResolvable | LambdaWebFunctionRevisionBuildConfigCodeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---

##### `runtimeConfigInput`<sup>Optional</sup> <a name="runtimeConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput"></a>

```typescript
public readonly runtimeConfigInput: IResolvable | LambdaWebFunctionRevisionBuildConfigRuntimeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaWebFunctionRevisionBuildConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

---


### LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaWebFunctionRevisionBuildConfigRuntimeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig">putTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment">resetMaxConcurrencyPerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig">resetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTelemetryConfig` <a name="putTelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig"></a>

```typescript
public putTelemetryConfig(value: LambdaWebFunctionRevisionServiceConfigTelemetryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetMaxConcurrencyPerEnvironment` <a name="resetMaxConcurrencyPerEnvironment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment"></a>

```typescript
public resetMaxConcurrencyPerEnvironment(): void
```

##### `resetTelemetryConfig` <a name="resetTelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig"></a>

```typescript
public resetTelemetryConfig(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput">maxConcurrencyPerEnvironmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput">telemetryConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment">maxConcurrencyPerEnvironment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `maxConcurrencyPerEnvironmentInput`<sup>Optional</sup> <a name="maxConcurrencyPerEnvironmentInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput"></a>

```typescript
public readonly maxConcurrencyPerEnvironmentInput: number;
```

- *Type:* number

---

##### `telemetryConfigInput`<sup>Optional</sup> <a name="telemetryConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput"></a>

```typescript
public readonly telemetryConfigInput: IResolvable | LambdaWebFunctionRevisionServiceConfigTelemetryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `maxConcurrencyPerEnvironment`<sup>Required</sup> <a name="maxConcurrencyPerEnvironment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment"></a>

```typescript
public readonly maxConcurrencyPerEnvironment: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaWebFunctionRevisionServiceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel">resetApplicationLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel">resetSystemLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationLogLevel` <a name="resetApplicationLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel"></a>

```typescript
public resetApplicationLogLevel(): void
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```

##### `resetSystemLogLevel` <a name="resetSystemLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel"></a>

```typescript
public resetSystemLogLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput">applicationLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput">systemLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogLevelInput`<sup>Optional</sup> <a name="applicationLogLevelInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput"></a>

```typescript
public readonly applicationLogLevelInput: string;
```

- *Type:* string

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `systemLogLevelInput`<sup>Optional</sup> <a name="systemLogLevelInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```typescript
public readonly systemLogLevelInput: string;
```

- *Type:* string

---

##### `applicationLogLevel`<sup>Required</sup> <a name="applicationLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `systemLogLevel`<sup>Required</sup> <a name="systemLogLevel" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer"></a>

```typescript
import { lambdaWebFunctionRevision } from '@cdktn/provider-awscc'

new lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput">loggingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a>

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: IResolvable | LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaWebFunctionRevisionServiceConfigTelemetryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---



