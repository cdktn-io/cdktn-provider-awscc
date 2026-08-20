# `lambdaEventInvokeConfig` Submodule <a name="`lambdaEventInvokeConfig` Submodule" id="@cdktn/provider-awscc.lambdaEventInvokeConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaEventInvokeConfig <a name="LambdaEventInvokeConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config awscc_lambda_event_invoke_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

new lambdaEventInvokeConfig.LambdaEventInvokeConfig(scope: Construct, id: string, config: LambdaEventInvokeConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig">LambdaEventInvokeConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig">LambdaEventInvokeConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig">putDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetDestinationConfig">resetDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumEventAgeInSeconds">resetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumRetryAttempts">resetMaximumRetryAttempts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationConfig` <a name="putDestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig"></a>

```typescript
public putDestinationConfig(value: LambdaEventInvokeConfigDestinationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

---

##### `resetDestinationConfig` <a name="resetDestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetDestinationConfig"></a>

```typescript
public resetDestinationConfig(): void
```

##### `resetMaximumEventAgeInSeconds` <a name="resetMaximumEventAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumEventAgeInSeconds"></a>

```typescript
public resetMaximumEventAgeInSeconds(): void
```

##### `resetMaximumRetryAttempts` <a name="resetMaximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumRetryAttempts"></a>

```typescript
public resetMaximumRetryAttempts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaEventInvokeConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaEventInvokeConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaEventInvokeConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference">LambdaEventInvokeConfigDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfigInput">destinationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSecondsInput">maximumEventAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttemptsInput">maximumRetryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifierInput">qualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destinationConfig`<sup>Required</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfig"></a>

```typescript
public readonly destinationConfig: LambdaEventInvokeConfigDestinationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference">LambdaEventInvokeConfigDestinationConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `destinationConfigInput`<sup>Optional</sup> <a name="destinationConfigInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfigInput"></a>

```typescript
public readonly destinationConfigInput: IResolvable | LambdaEventInvokeConfigDestinationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `maximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="maximumEventAgeInSecondsInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSecondsInput"></a>

```typescript
public readonly maximumEventAgeInSecondsInput: number;
```

- *Type:* number

---

##### `maximumRetryAttemptsInput`<sup>Optional</sup> <a name="maximumRetryAttemptsInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttemptsInput"></a>

```typescript
public readonly maximumRetryAttemptsInput: number;
```

- *Type:* number

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifierInput"></a>

```typescript
public readonly qualifierInput: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaEventInvokeConfigConfig <a name="LambdaEventInvokeConfigConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.Initializer"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

const lambdaEventInvokeConfigConfig: lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.functionName">functionName</a></code> | <code>string</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.qualifier">qualifier</a></code> | <code>string</code> | The identifier of a version or alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | A destination for events after they have been sent to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#function_name LambdaEventInvokeConfig#function_name}

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

The identifier of a version or alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#qualifier LambdaEventInvokeConfig#qualifier}

---

##### `destinationConfig`<sup>Optional</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.destinationConfig"></a>

```typescript
public readonly destinationConfig: LambdaEventInvokeConfigDestinationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

A destination for events after they have been sent to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#destination_config LambdaEventInvokeConfig#destination_config}

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

The maximum age of a request that Lambda sends to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#maximum_event_age_in_seconds LambdaEventInvokeConfig#maximum_event_age_in_seconds}

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

The maximum number of times to retry when the function returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#maximum_retry_attempts LambdaEventInvokeConfig#maximum_retry_attempts}

---

### LambdaEventInvokeConfigDestinationConfig <a name="LambdaEventInvokeConfigDestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.Initializer"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

const lambdaEventInvokeConfigDestinationConfig: lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onFailure">onFailure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | The destination configuration for failed invocations. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | The destination configuration for successful invocations. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onFailure"></a>

```typescript
public readonly onFailure: LambdaEventInvokeConfigDestinationConfigOnFailure;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

The destination configuration for failed invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#on_failure LambdaEventInvokeConfig#on_failure}

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onSuccess"></a>

```typescript
public readonly onSuccess: LambdaEventInvokeConfigDestinationConfigOnSuccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

The destination configuration for successful invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#on_success LambdaEventInvokeConfig#on_success}

---

### LambdaEventInvokeConfigDestinationConfigOnFailure <a name="LambdaEventInvokeConfigDestinationConfigOnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

const lambdaEventInvokeConfigDestinationConfigOnFailure: lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.property.destination">destination</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the destination resource. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the destination resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#destination LambdaEventInvokeConfig#destination}

---

### LambdaEventInvokeConfigDestinationConfigOnSuccess <a name="LambdaEventInvokeConfigDestinationConfigOnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

const lambdaEventInvokeConfigDestinationConfigOnSuccess: lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.property.destination">destination</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the destination resource. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the destination resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_event_invoke_config#destination LambdaEventInvokeConfig#destination}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

new lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resetDestination">resetDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaEventInvokeConfigDestinationConfigOnFailure;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

---


### LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

new lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resetDestination">resetDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaEventInvokeConfigDestinationConfigOnSuccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---


### LambdaEventInvokeConfigDestinationConfigOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer"></a>

```typescript
import { lambdaEventInvokeConfig } from '@cdktn/provider-awscc'

new lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess">putOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess">resetOnSuccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailure` <a name="putOnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure"></a>

```typescript
public putOnFailure(value: LambdaEventInvokeConfigDestinationConfigOnFailure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `putOnSuccess` <a name="putOnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess"></a>

```typescript
public putOnSuccess(value: LambdaEventInvokeConfigDestinationConfigOnSuccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnFailure"></a>

```typescript
public resetOnFailure(): void
```

##### `resetOnSuccess` <a name="resetOnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess"></a>

```typescript
public resetOnSuccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput">onFailureInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput">onSuccessInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a>

---

##### `onSuccess`<sup>Required</sup> <a name="onSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess"></a>

```typescript
public readonly onSuccess: LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput"></a>

```typescript
public readonly onFailureInput: IResolvable | LambdaEventInvokeConfigDestinationConfigOnFailure;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `onSuccessInput`<sup>Optional</sup> <a name="onSuccessInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput"></a>

```typescript
public readonly onSuccessInput: IResolvable | LambdaEventInvokeConfigDestinationConfigOnSuccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaEventInvokeConfigDestinationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

---



