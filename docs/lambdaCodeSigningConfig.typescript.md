# `lambdaCodeSigningConfig` Submodule <a name="`lambdaCodeSigningConfig` Submodule" id="@cdktn/provider-awscc.lambdaCodeSigningConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaCodeSigningConfig <a name="LambdaCodeSigningConfig" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_code_signing_config awscc_lambda_code_signing_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

new lambdaCodeSigningConfig.LambdaCodeSigningConfig(scope: Construct, id: string, config: LambdaCodeSigningConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig">LambdaCodeSigningConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig">LambdaCodeSigningConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers">putAllowedPublishers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putCodeSigningPolicies">putCodeSigningPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetCodeSigningPolicies">resetCodeSigningPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedPublishers` <a name="putAllowedPublishers" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers"></a>

```typescript
public putAllowedPublishers(value: LambdaCodeSigningConfigAllowedPublishers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---

##### `putCodeSigningPolicies` <a name="putCodeSigningPolicies" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putCodeSigningPolicies"></a>

```typescript
public putCodeSigningPolicies(value: LambdaCodeSigningConfigCodeSigningPolicies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putCodeSigningPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies">LambdaCodeSigningConfigCodeSigningPolicies</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putTags"></a>

```typescript
public putTags(value: IResolvable | LambdaCodeSigningConfigTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags">LambdaCodeSigningConfigTags</a>[]

---

##### `resetCodeSigningPolicies` <a name="resetCodeSigningPolicies" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetCodeSigningPolicies"></a>

```typescript
public resetCodeSigningPolicies(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaCodeSigningConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdaCodeSigningConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaCodeSigningConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaCodeSigningConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_code_signing_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaCodeSigningConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishers">allowedPublishers</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference">LambdaCodeSigningConfigAllowedPublishersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.codeSigningConfigArn">codeSigningConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.codeSigningConfigId">codeSigningConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.codeSigningPolicies">codeSigningPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference">LambdaCodeSigningConfigCodeSigningPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList">LambdaCodeSigningConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishersInput">allowedPublishersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.codeSigningPoliciesInput">codeSigningPoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies">LambdaCodeSigningConfigCodeSigningPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags">LambdaCodeSigningConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowedPublishers`<sup>Required</sup> <a name="allowedPublishers" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishers"></a>

```typescript
public readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference">LambdaCodeSigningConfigAllowedPublishersOutputReference</a>

---

##### `codeSigningConfigArn`<sup>Required</sup> <a name="codeSigningConfigArn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.codeSigningConfigArn"></a>

```typescript
public readonly codeSigningConfigArn: string;
```

- *Type:* string

---

##### `codeSigningConfigId`<sup>Required</sup> <a name="codeSigningConfigId" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.codeSigningConfigId"></a>

```typescript
public readonly codeSigningConfigId: string;
```

- *Type:* string

---

##### `codeSigningPolicies`<sup>Required</sup> <a name="codeSigningPolicies" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.codeSigningPolicies"></a>

```typescript
public readonly codeSigningPolicies: LambdaCodeSigningConfigCodeSigningPoliciesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference">LambdaCodeSigningConfigCodeSigningPoliciesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tags"></a>

```typescript
public readonly tags: LambdaCodeSigningConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList">LambdaCodeSigningConfigTagsList</a>

---

##### `allowedPublishersInput`<sup>Optional</sup> <a name="allowedPublishersInput" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishersInput"></a>

```typescript
public readonly allowedPublishersInput: IResolvable | LambdaCodeSigningConfigAllowedPublishers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---

##### `codeSigningPoliciesInput`<sup>Optional</sup> <a name="codeSigningPoliciesInput" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.codeSigningPoliciesInput"></a>

```typescript
public readonly codeSigningPoliciesInput: IResolvable | LambdaCodeSigningConfigCodeSigningPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies">LambdaCodeSigningConfigCodeSigningPolicies</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LambdaCodeSigningConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags">LambdaCodeSigningConfigTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaCodeSigningConfigAllowedPublishers <a name="LambdaCodeSigningConfigAllowedPublishers" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

const lambdaCodeSigningConfigAllowedPublishers: lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns">signingProfileVersionArns</a></code> | <code>string[]</code> | List of Signing profile version Arns. |

---

##### `signingProfileVersionArns`<sup>Required</sup> <a name="signingProfileVersionArns" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns"></a>

```typescript
public readonly signingProfileVersionArns: string[];
```

- *Type:* string[]

List of Signing profile version Arns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}

---

### LambdaCodeSigningConfigCodeSigningPolicies <a name="LambdaCodeSigningConfigCodeSigningPolicies" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

const lambdaCodeSigningConfigCodeSigningPolicies: lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies.property.untrustedArtifactOnDeployment">untrustedArtifactOnDeployment</a></code> | <code>string</code> | Indicates how Lambda operations involve updating the code artifact will operate. Default to Warn if not provided. |

---

##### `untrustedArtifactOnDeployment`<sup>Optional</sup> <a name="untrustedArtifactOnDeployment" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies.property.untrustedArtifactOnDeployment"></a>

```typescript
public readonly untrustedArtifactOnDeployment: string;
```

- *Type:* string

Indicates how Lambda operations involve updating the code artifact will operate. Default to Warn if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}

---

### LambdaCodeSigningConfigConfig <a name="LambdaCodeSigningConfigConfig" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

const lambdaCodeSigningConfigConfig: lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.allowedPublishers">allowedPublishers</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.codeSigningPolicies">codeSigningPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies">LambdaCodeSigningConfigCodeSigningPolicies</a></code> | Policies to control how to act if a signature is invalid. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.description">description</a></code> | <code>string</code> | A description of the CodeSigningConfig. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags">LambdaCodeSigningConfigTags</a>[]</code> | A list of tags to apply to CodeSigningConfig resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowedPublishers`<sup>Required</sup> <a name="allowedPublishers" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.allowedPublishers"></a>

```typescript
public readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishers;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_code_signing_config#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}

---

##### `codeSigningPolicies`<sup>Optional</sup> <a name="codeSigningPolicies" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.codeSigningPolicies"></a>

```typescript
public readonly codeSigningPolicies: LambdaCodeSigningConfigCodeSigningPolicies;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies">LambdaCodeSigningConfigCodeSigningPolicies</a>

Policies to control how to act if a signature is invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_code_signing_config#code_signing_policies LambdaCodeSigningConfig#code_signing_policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the CodeSigningConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_code_signing_config#description LambdaCodeSigningConfig#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LambdaCodeSigningConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags">LambdaCodeSigningConfigTags</a>[]

A list of tags to apply to CodeSigningConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_code_signing_config#tags LambdaCodeSigningConfig#tags}

---

### LambdaCodeSigningConfigTags <a name="LambdaCodeSigningConfigTags" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

const lambdaCodeSigningConfigTags: lambdaCodeSigningConfig.LambdaCodeSigningConfigTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_code_signing_config#key LambdaCodeSigningConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_code_signing_config#value LambdaCodeSigningConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaCodeSigningConfigAllowedPublishersOutputReference <a name="LambdaCodeSigningConfigAllowedPublishersOutputReference" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

new lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArnsInput">signingProfileVersionArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns">signingProfileVersionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signingProfileVersionArnsInput`<sup>Optional</sup> <a name="signingProfileVersionArnsInput" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArnsInput"></a>

```typescript
public readonly signingProfileVersionArnsInput: string[];
```

- *Type:* string[]

---

##### `signingProfileVersionArns`<sup>Required</sup> <a name="signingProfileVersionArns" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns"></a>

```typescript
public readonly signingProfileVersionArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCodeSigningConfigAllowedPublishers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---


### LambdaCodeSigningConfigCodeSigningPoliciesOutputReference <a name="LambdaCodeSigningConfigCodeSigningPoliciesOutputReference" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

new lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.resetUntrustedArtifactOnDeployment">resetUntrustedArtifactOnDeployment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUntrustedArtifactOnDeployment` <a name="resetUntrustedArtifactOnDeployment" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.resetUntrustedArtifactOnDeployment"></a>

```typescript
public resetUntrustedArtifactOnDeployment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.untrustedArtifactOnDeploymentInput">untrustedArtifactOnDeploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.untrustedArtifactOnDeployment">untrustedArtifactOnDeployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies">LambdaCodeSigningConfigCodeSigningPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `untrustedArtifactOnDeploymentInput`<sup>Optional</sup> <a name="untrustedArtifactOnDeploymentInput" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.untrustedArtifactOnDeploymentInput"></a>

```typescript
public readonly untrustedArtifactOnDeploymentInput: string;
```

- *Type:* string

---

##### `untrustedArtifactOnDeployment`<sup>Required</sup> <a name="untrustedArtifactOnDeployment" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.untrustedArtifactOnDeployment"></a>

```typescript
public readonly untrustedArtifactOnDeployment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCodeSigningConfigCodeSigningPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigCodeSigningPolicies">LambdaCodeSigningConfigCodeSigningPolicies</a>

---


### LambdaCodeSigningConfigTagsList <a name="LambdaCodeSigningConfigTagsList" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

new lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.get"></a>

```typescript
public get(index: number): LambdaCodeSigningConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags">LambdaCodeSigningConfigTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCodeSigningConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags">LambdaCodeSigningConfigTags</a>[]

---


### LambdaCodeSigningConfigTagsOutputReference <a name="LambdaCodeSigningConfigTagsOutputReference" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.Initializer"></a>

```typescript
import { lambdaCodeSigningConfig } from '@cdktn/provider-awscc'

new lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags">LambdaCodeSigningConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaCodeSigningConfigTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaCodeSigningConfig.LambdaCodeSigningConfigTags">LambdaCodeSigningConfigTags</a>

---



