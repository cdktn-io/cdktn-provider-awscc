# `cloudfrontContinuousDeploymentPolicy` Submodule <a name="`cloudfrontContinuousDeploymentPolicy` Submodule" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontContinuousDeploymentPolicy <a name="CloudfrontContinuousDeploymentPolicy" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy awscc_cloudfront_continuous_deployment_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy(scope: Construct, id: string, config: CloudfrontContinuousDeploymentPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putContinuousDeploymentPolicyConfig">putContinuousDeploymentPolicyConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContinuousDeploymentPolicyConfig` <a name="putContinuousDeploymentPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putContinuousDeploymentPolicyConfig"></a>

```typescript
public putContinuousDeploymentPolicyConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.putContinuousDeploymentPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontContinuousDeploymentPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudfrontContinuousDeploymentPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontContinuousDeploymentPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontContinuousDeploymentPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontContinuousDeploymentPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyConfig">continuousDeploymentPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyId">continuousDeploymentPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyConfigInput">continuousDeploymentPolicyConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `continuousDeploymentPolicyConfig`<sup>Required</sup> <a name="continuousDeploymentPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyConfig"></a>

```typescript
public readonly continuousDeploymentPolicyConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference</a>

---

##### `continuousDeploymentPolicyId`<sup>Required</sup> <a name="continuousDeploymentPolicyId" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyId"></a>

```typescript
public readonly continuousDeploymentPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `continuousDeploymentPolicyConfigInput`<sup>Optional</sup> <a name="continuousDeploymentPolicyConfigInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.continuousDeploymentPolicyConfigInput"></a>

```typescript
public readonly continuousDeploymentPolicyConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontContinuousDeploymentPolicyConfig <a name="CloudfrontContinuousDeploymentPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

const cloudfrontContinuousDeploymentPolicyConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.continuousDeploymentPolicyConfig">continuousDeploymentPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a></code> | Contains the configuration for a continuous deployment policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `continuousDeploymentPolicyConfig`<sup>Required</sup> <a name="continuousDeploymentPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyConfig.property.continuousDeploymentPolicyConfig"></a>

```typescript
public readonly continuousDeploymentPolicyConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a>

Contains the configuration for a continuous deployment policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#continuous_deployment_policy_config CloudfrontContinuousDeploymentPolicy#continuous_deployment_policy_config}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

const cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean that indicates whether this continuous deployment policy is enabled (in effect). |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.stagingDistributionDnsNames">stagingDistributionDnsNames</a></code> | <code>string[]</code> | The CloudFront domain name of the staging distribution. For example: ``d111111abcdef8.cloudfront.net``. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.singleHeaderPolicyConfig">singleHeaderPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a></code> | This configuration determines which HTTP requests are sent to the staging distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.singleWeightPolicyConfig">singleWeightPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a></code> | This configuration determines the percentage of HTTP requests that are sent to the staging distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a></code> | Contains the parameters for routing production traffic from your primary to staging distributions. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.type">type</a></code> | <code>string</code> | The type of traffic configuration. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean that indicates whether this continuous deployment policy is enabled (in effect).

When this value is ``true``, this policy is enabled and in effect. When this value is ``false``, this policy is not enabled and has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}

---

##### `stagingDistributionDnsNames`<sup>Required</sup> <a name="stagingDistributionDnsNames" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.stagingDistributionDnsNames"></a>

```typescript
public readonly stagingDistributionDnsNames: string[];
```

- *Type:* string[]

The CloudFront domain name of the staging distribution. For example: ``d111111abcdef8.cloudfront.net``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#staging_distribution_dns_names CloudfrontContinuousDeploymentPolicy#staging_distribution_dns_names}

---

##### `singleHeaderPolicyConfig`<sup>Optional</sup> <a name="singleHeaderPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.singleHeaderPolicyConfig"></a>

```typescript
public readonly singleHeaderPolicyConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a>

This configuration determines which HTTP requests are sent to the staging distribution.

If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_policy_config CloudfrontContinuousDeploymentPolicy#single_header_policy_config}

---

##### `singleWeightPolicyConfig`<sup>Optional</sup> <a name="singleWeightPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.singleWeightPolicyConfig"></a>

```typescript
public readonly singleWeightPolicyConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a>

This configuration determines the percentage of HTTP requests that are sent to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_policy_config CloudfrontContinuousDeploymentPolicy#single_weight_policy_config}

---

##### `trafficConfig`<sup>Optional</sup> <a name="trafficConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.trafficConfig"></a>

```typescript
public readonly trafficConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a>

Contains the parameters for routing production traffic from your primary to staging distributions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#traffic_config CloudfrontContinuousDeploymentPolicy#traffic_config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of traffic configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

const cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig.property.header">header</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}.

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

const cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig.property.sessionStickinessConfig">sessionStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a></code> | Session stickiness provides the ability to define multiple requests from a single viewer as a single session. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}. |

---

##### `sessionStickinessConfig`<sup>Optional</sup> <a name="sessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig.property.sessionStickinessConfig"></a>

```typescript
public readonly sessionStickinessConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a>

Session stickiness provides the ability to define multiple requests from a single viewer as a single session.

This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}.

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

const cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig.property.idleTtl">idleTtl</a></code> | <code>number</code> | The amount of time after which you want sessions to cease if no requests are received. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig.property.maximumTtl">maximumTtl</a></code> | <code>number</code> | The maximum amount of time to consider requests from the viewer as being part of the same session. |

---

##### `idleTtl`<sup>Optional</sup> <a name="idleTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig.property.idleTtl"></a>

```typescript
public readonly idleTtl: number;
```

- *Type:* number

The amount of time after which you want sessions to cease if no requests are received.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}

---

##### `maximumTtl`<sup>Optional</sup> <a name="maximumTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig.property.maximumTtl"></a>

```typescript
public readonly maximumTtl: number;
```

- *Type:* number

The maximum amount of time to consider requests from the viewer as being part of the same session.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

const cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.singleHeaderConfig">singleHeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a></code> | Determines which HTTP requests are sent to the staging distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.singleWeightConfig">singleWeightConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a></code> | Contains the percentage of traffic to send to the staging distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.type">type</a></code> | <code>string</code> | The type of traffic configuration. |

---

##### `singleHeaderConfig`<sup>Optional</sup> <a name="singleHeaderConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.singleHeaderConfig"></a>

```typescript
public readonly singleHeaderConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a>

Determines which HTTP requests are sent to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_config CloudfrontContinuousDeploymentPolicy#single_header_config}

---

##### `singleWeightConfig`<sup>Optional</sup> <a name="singleWeightConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.singleWeightConfig"></a>

```typescript
public readonly singleWeightConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a>

Contains the percentage of traffic to send to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_config CloudfrontContinuousDeploymentPolicy#single_weight_config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of traffic configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

const cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig.property.header">header</a></code> | <code>string</code> | The request header name that you want CloudFront to send to your staging distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig.property.value">value</a></code> | <code>string</code> | The request header value. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

The request header name that you want CloudFront to send to your staging distribution.

The header must contain the prefix ``aws-cf-cd-``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The request header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

const cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig.property.sessionStickinessConfig">sessionStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a></code> | Session stickiness provides the ability to define multiple requests from a single viewer as a single session. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig.property.weight">weight</a></code> | <code>number</code> | The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution. |

---

##### `sessionStickinessConfig`<sup>Optional</sup> <a name="sessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig.property.sessionStickinessConfig"></a>

```typescript
public readonly sessionStickinessConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a>

Session stickiness provides the ability to define multiple requests from a single viewer as a single session.

This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}

---

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

const cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig: cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig.property.idleTtl">idleTtl</a></code> | <code>number</code> | The amount of time after which you want sessions to cease if no requests are received. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig.property.maximumTtl">maximumTtl</a></code> | <code>number</code> | The maximum amount of time to consider requests from the viewer as being part of the same session. |

---

##### `idleTtl`<sup>Optional</sup> <a name="idleTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig.property.idleTtl"></a>

```typescript
public readonly idleTtl: number;
```

- *Type:* number

The amount of time after which you want sessions to cease if no requests are received.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}

---

##### `maximumTtl`<sup>Optional</sup> <a name="maximumTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig.property.maximumTtl"></a>

```typescript
public readonly maximumTtl: number;
```

- *Type:* number

The maximum amount of time to consider requests from the viewer as being part of the same session.

Allowed values are 300?3600 seconds (5?60 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleHeaderPolicyConfig">putSingleHeaderPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleWeightPolicyConfig">putSingleWeightPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putTrafficConfig">putTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetSingleHeaderPolicyConfig">resetSingleHeaderPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetSingleWeightPolicyConfig">resetSingleWeightPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetTrafficConfig">resetTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSingleHeaderPolicyConfig` <a name="putSingleHeaderPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleHeaderPolicyConfig"></a>

```typescript
public putSingleHeaderPolicyConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleHeaderPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a>

---

##### `putSingleWeightPolicyConfig` <a name="putSingleWeightPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleWeightPolicyConfig"></a>

```typescript
public putSingleWeightPolicyConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putSingleWeightPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a>

---

##### `putTrafficConfig` <a name="putTrafficConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putTrafficConfig"></a>

```typescript
public putTrafficConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.putTrafficConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a>

---

##### `resetSingleHeaderPolicyConfig` <a name="resetSingleHeaderPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetSingleHeaderPolicyConfig"></a>

```typescript
public resetSingleHeaderPolicyConfig(): void
```

##### `resetSingleWeightPolicyConfig` <a name="resetSingleWeightPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetSingleWeightPolicyConfig"></a>

```typescript
public resetSingleWeightPolicyConfig(): void
```

##### `resetTrafficConfig` <a name="resetTrafficConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetTrafficConfig"></a>

```typescript
public resetTrafficConfig(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleHeaderPolicyConfig">singleHeaderPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleWeightPolicyConfig">singleWeightPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleHeaderPolicyConfigInput">singleHeaderPolicyConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleWeightPolicyConfigInput">singleWeightPolicyConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.stagingDistributionDnsNamesInput">stagingDistributionDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.trafficConfigInput">trafficConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.stagingDistributionDnsNames">stagingDistributionDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `singleHeaderPolicyConfig`<sup>Required</sup> <a name="singleHeaderPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleHeaderPolicyConfig"></a>

```typescript
public readonly singleHeaderPolicyConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference</a>

---

##### `singleWeightPolicyConfig`<sup>Required</sup> <a name="singleWeightPolicyConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleWeightPolicyConfig"></a>

```typescript
public readonly singleWeightPolicyConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference</a>

---

##### `trafficConfig`<sup>Required</sup> <a name="trafficConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.trafficConfig"></a>

```typescript
public readonly trafficConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `singleHeaderPolicyConfigInput`<sup>Optional</sup> <a name="singleHeaderPolicyConfigInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleHeaderPolicyConfigInput"></a>

```typescript
public readonly singleHeaderPolicyConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a>

---

##### `singleWeightPolicyConfigInput`<sup>Optional</sup> <a name="singleWeightPolicyConfigInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.singleWeightPolicyConfigInput"></a>

```typescript
public readonly singleWeightPolicyConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a>

---

##### `stagingDistributionDnsNamesInput`<sup>Optional</sup> <a name="stagingDistributionDnsNamesInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.stagingDistributionDnsNamesInput"></a>

```typescript
public readonly stagingDistributionDnsNamesInput: string[];
```

- *Type:* string[]

---

##### `trafficConfigInput`<sup>Optional</sup> <a name="trafficConfigInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.trafficConfigInput"></a>

```typescript
public readonly trafficConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `stagingDistributionDnsNames`<sup>Required</sup> <a name="stagingDistributionDnsNames" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.stagingDistributionDnsNames"></a>

```typescript
public readonly stagingDistributionDnsNames: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.putSessionStickinessConfig">putSessionStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resetSessionStickinessConfig">resetSessionStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionStickinessConfig` <a name="putSessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.putSessionStickinessConfig"></a>

```typescript
public putSessionStickinessConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.putSessionStickinessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a>

---

##### `resetSessionStickinessConfig` <a name="resetSessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resetSessionStickinessConfig"></a>

```typescript
public resetSessionStickinessConfig(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.sessionStickinessConfig">sessionStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.sessionStickinessConfigInput">sessionStickinessConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionStickinessConfig`<sup>Required</sup> <a name="sessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.sessionStickinessConfig"></a>

```typescript
public readonly sessionStickinessConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference</a>

---

##### `sessionStickinessConfigInput`<sup>Optional</sup> <a name="sessionStickinessConfigInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.sessionStickinessConfigInput"></a>

```typescript
public readonly sessionStickinessConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a>

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resetIdleTtl">resetIdleTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resetMaximumTtl">resetMaximumTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTtl` <a name="resetIdleTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resetIdleTtl"></a>

```typescript
public resetIdleTtl(): void
```

##### `resetMaximumTtl` <a name="resetMaximumTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.resetMaximumTtl"></a>

```typescript
public resetMaximumTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.idleTtlInput">idleTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.maximumTtlInput">maximumTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.idleTtl">idleTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.maximumTtl">maximumTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTtlInput`<sup>Optional</sup> <a name="idleTtlInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.idleTtlInput"></a>

```typescript
public readonly idleTtlInput: number;
```

- *Type:* number

---

##### `maximumTtlInput`<sup>Optional</sup> <a name="maximumTtlInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.maximumTtlInput"></a>

```typescript
public readonly maximumTtlInput: number;
```

- *Type:* number

---

##### `idleTtl`<sup>Required</sup> <a name="idleTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.idleTtl"></a>

```typescript
public readonly idleTtl: number;
```

- *Type:* number

---

##### `maximumTtl`<sup>Required</sup> <a name="maximumTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.maximumTtl"></a>

```typescript
public readonly maximumTtl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleHeaderConfig">putSingleHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleWeightConfig">putSingleWeightConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetSingleHeaderConfig">resetSingleHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetSingleWeightConfig">resetSingleWeightConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSingleHeaderConfig` <a name="putSingleHeaderConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleHeaderConfig"></a>

```typescript
public putSingleHeaderConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleHeaderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a>

---

##### `putSingleWeightConfig` <a name="putSingleWeightConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleWeightConfig"></a>

```typescript
public putSingleWeightConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.putSingleWeightConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a>

---

##### `resetSingleHeaderConfig` <a name="resetSingleHeaderConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetSingleHeaderConfig"></a>

```typescript
public resetSingleHeaderConfig(): void
```

##### `resetSingleWeightConfig` <a name="resetSingleWeightConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetSingleWeightConfig"></a>

```typescript
public resetSingleWeightConfig(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleHeaderConfig">singleHeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleWeightConfig">singleWeightConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleHeaderConfigInput">singleHeaderConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleWeightConfigInput">singleWeightConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `singleHeaderConfig`<sup>Required</sup> <a name="singleHeaderConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleHeaderConfig"></a>

```typescript
public readonly singleHeaderConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference</a>

---

##### `singleWeightConfig`<sup>Required</sup> <a name="singleWeightConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleWeightConfig"></a>

```typescript
public readonly singleWeightConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference</a>

---

##### `singleHeaderConfigInput`<sup>Optional</sup> <a name="singleHeaderConfigInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleHeaderConfigInput"></a>

```typescript
public readonly singleHeaderConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a>

---

##### `singleWeightConfigInput`<sup>Optional</sup> <a name="singleWeightConfigInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.singleWeightConfigInput"></a>

```typescript
public readonly singleWeightConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.headerInput">headerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig">putSessionStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resetSessionStickinessConfig">resetSessionStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionStickinessConfig` <a name="putSessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig"></a>

```typescript
public putSessionStickinessConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.putSessionStickinessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a>

---

##### `resetSessionStickinessConfig` <a name="resetSessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resetSessionStickinessConfig"></a>

```typescript
public resetSessionStickinessConfig(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfig">sessionStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfigInput">sessionStickinessConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionStickinessConfig`<sup>Required</sup> <a name="sessionStickinessConfig" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfig"></a>

```typescript
public readonly sessionStickinessConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference</a>

---

##### `sessionStickinessConfigInput`<sup>Optional</sup> <a name="sessionStickinessConfigInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.sessionStickinessConfigInput"></a>

```typescript
public readonly sessionStickinessConfigInput: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a>

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig</a>

---


### CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference <a name="CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontContinuousDeploymentPolicy } from '@cdktn/provider-awscc'

new cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resetIdleTtl">resetIdleTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resetMaximumTtl">resetMaximumTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTtl` <a name="resetIdleTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resetIdleTtl"></a>

```typescript
public resetIdleTtl(): void
```

##### `resetMaximumTtl` <a name="resetMaximumTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.resetMaximumTtl"></a>

```typescript
public resetMaximumTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtlInput">idleTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtlInput">maximumTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtl">idleTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtl">maximumTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTtlInput`<sup>Optional</sup> <a name="idleTtlInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtlInput"></a>

```typescript
public readonly idleTtlInput: number;
```

- *Type:* number

---

##### `maximumTtlInput`<sup>Optional</sup> <a name="maximumTtlInput" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtlInput"></a>

```typescript
public readonly maximumTtlInput: number;
```

- *Type:* number

---

##### `idleTtl`<sup>Required</sup> <a name="idleTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.idleTtl"></a>

```typescript
public readonly idleTtl: number;
```

- *Type:* number

---

##### `maximumTtl`<sup>Required</sup> <a name="maximumTtl" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.maximumTtl"></a>

```typescript
public readonly maximumTtl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontContinuousDeploymentPolicy.CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig">CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig</a>

---



