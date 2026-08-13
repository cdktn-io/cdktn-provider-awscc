# `lambdaPermission` Submodule <a name="`lambdaPermission` Submodule" id="@cdktn/provider-awscc.lambdaPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaPermission <a name="LambdaPermission" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_permission awscc_lambda_permission}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer"></a>

```typescript
import { lambdaPermission } from '@cdktn/provider-awscc'

new lambdaPermission.LambdaPermission(scope: Construct, id: string, config: LambdaPermissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig">LambdaPermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig">LambdaPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetEventSourceToken">resetEventSourceToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType">resetFunctionUrlAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetInvokedViaFunctionUrl">resetInvokedViaFunctionUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetPrincipalOrgId">resetPrincipalOrgId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetSourceAccount">resetSourceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetSourceArn">resetSourceArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEventSourceToken` <a name="resetEventSourceToken" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetEventSourceToken"></a>

```typescript
public resetEventSourceToken(): void
```

##### `resetFunctionUrlAuthType` <a name="resetFunctionUrlAuthType" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType"></a>

```typescript
public resetFunctionUrlAuthType(): void
```

##### `resetInvokedViaFunctionUrl` <a name="resetInvokedViaFunctionUrl" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetInvokedViaFunctionUrl"></a>

```typescript
public resetInvokedViaFunctionUrl(): void
```

##### `resetPrincipalOrgId` <a name="resetPrincipalOrgId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetPrincipalOrgId"></a>

```typescript
public resetPrincipalOrgId(): void
```

##### `resetSourceAccount` <a name="resetSourceAccount" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetSourceAccount"></a>

```typescript
public resetSourceAccount(): void
```

##### `resetSourceArn` <a name="resetSourceArn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.resetSourceArn"></a>

```typescript
public resetSourceArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaPermission resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isConstruct"></a>

```typescript
import { lambdaPermission } from '@cdktn/provider-awscc'

lambdaPermission.LambdaPermission.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformElement"></a>

```typescript
import { lambdaPermission } from '@cdktn/provider-awscc'

lambdaPermission.LambdaPermission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformResource"></a>

```typescript
import { lambdaPermission } from '@cdktn/provider-awscc'

lambdaPermission.LambdaPermission.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport"></a>

```typescript
import { lambdaPermission } from '@cdktn/provider-awscc'

lambdaPermission.LambdaPermission.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdaPermission resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaPermission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaPermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_permission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaPermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.permissionId">permissionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.eventSourceTokenInput">eventSourceTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput">functionUrlAuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrlInput">invokedViaFunctionUrlInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalOrgIdInput">principalOrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceAccountInput">sourceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceArnInput">sourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.eventSourceToken">eventSourceToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionUrlAuthType">functionUrlAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrl">invokedViaFunctionUrl</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalOrgId">principalOrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceAccount">sourceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permissionId`<sup>Required</sup> <a name="permissionId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.permissionId"></a>

```typescript
public readonly permissionId: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `eventSourceTokenInput`<sup>Optional</sup> <a name="eventSourceTokenInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.eventSourceTokenInput"></a>

```typescript
public readonly eventSourceTokenInput: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `functionUrlAuthTypeInput`<sup>Optional</sup> <a name="functionUrlAuthTypeInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput"></a>

```typescript
public readonly functionUrlAuthTypeInput: string;
```

- *Type:* string

---

##### `invokedViaFunctionUrlInput`<sup>Optional</sup> <a name="invokedViaFunctionUrlInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrlInput"></a>

```typescript
public readonly invokedViaFunctionUrlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `principalOrgIdInput`<sup>Optional</sup> <a name="principalOrgIdInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalOrgIdInput"></a>

```typescript
public readonly principalOrgIdInput: string;
```

- *Type:* string

---

##### `sourceAccountInput`<sup>Optional</sup> <a name="sourceAccountInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceAccountInput"></a>

```typescript
public readonly sourceAccountInput: string;
```

- *Type:* string

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceArnInput"></a>

```typescript
public readonly sourceArnInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `eventSourceToken`<sup>Required</sup> <a name="eventSourceToken" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.eventSourceToken"></a>

```typescript
public readonly eventSourceToken: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `functionUrlAuthType`<sup>Required</sup> <a name="functionUrlAuthType" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.functionUrlAuthType"></a>

```typescript
public readonly functionUrlAuthType: string;
```

- *Type:* string

---

##### `invokedViaFunctionUrl`<sup>Required</sup> <a name="invokedViaFunctionUrl" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrl"></a>

```typescript
public readonly invokedViaFunctionUrl: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `principalOrgId`<sup>Required</sup> <a name="principalOrgId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.principalOrgId"></a>

```typescript
public readonly principalOrgId: string;
```

- *Type:* string

---

##### `sourceAccount`<sup>Required</sup> <a name="sourceAccount" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceAccount"></a>

```typescript
public readonly sourceAccount: string;
```

- *Type:* string

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaPermissionConfig <a name="LambdaPermissionConfig" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.Initializer"></a>

```typescript
import { lambdaPermission } from '@cdktn/provider-awscc'

const lambdaPermissionConfig: lambdaPermission.LambdaPermissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.action">action</a></code> | <code>string</code> | The action that the principal can use on the function. For example, ``lambda:InvokeFunction`` or ``lambda:GetFunction``. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.functionName">functionName</a></code> | <code>string</code> | The name or ARN of the Lambda function, version, or alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.principal">principal</a></code> | <code>string</code> | The AWS-service, AWS-account, IAM user, or IAM role that invokes the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken">eventSourceToken</a></code> | <code>string</code> | For Alexa Smart Home functions, a token that the invoker must supply. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType">functionUrlAuthType</a></code> | <code>string</code> | The type of authentication that your function URL uses. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.invokedViaFunctionUrl">invokedViaFunctionUrl</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the permission applies when the function is invoked through a function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.principalOrgId">principalOrgId</a></code> | <code>string</code> | The identifier for your organization in AOlong. Use this to grant permissions to all the AWS-accounts under this organization. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.sourceAccount">sourceAccount</a></code> | <code>string</code> | For AWS-service, the ID of the AWS-account that owns the resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.sourceArn">sourceArn</a></code> | <code>string</code> | For AWS-services, the ARN of the AWS resource that invokes the function. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action that the principal can use on the function. For example, ``lambda:InvokeFunction`` or ``lambda:GetFunction``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_permission#action LambdaPermission#action}

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The name or ARN of the Lambda function, version, or alias.

**Name formats**
 +  *Function name* ? ``my-function`` (name-only), ``my-function:v1`` (with alias).
  +  *Function ARN* ? ``arn:aws:lambda:us-west-2:123456789012:function:my-function``.
  +  *Partial ARN* ? ``123456789012:function:my-function``.
  
 You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

The AWS-service, AWS-account, IAM user, or IAM role that invokes the function.

If you specify a service, use ``SourceArn`` or ``SourceAccount`` to limit who can invoke the function through that service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_permission#principal LambdaPermission#principal}

---

##### `eventSourceToken`<sup>Optional</sup> <a name="eventSourceToken" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken"></a>

```typescript
public readonly eventSourceToken: string;
```

- *Type:* string

For Alexa Smart Home functions, a token that the invoker must supply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}

---

##### `functionUrlAuthType`<sup>Optional</sup> <a name="functionUrlAuthType" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType"></a>

```typescript
public readonly functionUrlAuthType: string;
```

- *Type:* string

The type of authentication that your function URL uses.

Set to ``AWS_IAM`` if you want to restrict access to authenticated users only. Set to ``NONE`` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Control access to Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}

---

##### `invokedViaFunctionUrl`<sup>Optional</sup> <a name="invokedViaFunctionUrl" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.invokedViaFunctionUrl"></a>

```typescript
public readonly invokedViaFunctionUrl: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the permission applies when the function is invoked through a function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_permission#invoked_via_function_url LambdaPermission#invoked_via_function_url}

---

##### `principalOrgId`<sup>Optional</sup> <a name="principalOrgId" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.principalOrgId"></a>

```typescript
public readonly principalOrgId: string;
```

- *Type:* string

The identifier for your organization in AOlong. Use this to grant permissions to all the AWS-accounts under this organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}

---

##### `sourceAccount`<sup>Optional</sup> <a name="sourceAccount" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.sourceAccount"></a>

```typescript
public readonly sourceAccount: string;
```

- *Type:* string

For AWS-service, the ID of the AWS-account that owns the resource.

Use this together with ``SourceArn`` to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}

---

##### `sourceArn`<sup>Optional</sup> <a name="sourceArn" id="@cdktn/provider-awscc.lambdaPermission.LambdaPermissionConfig.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

For AWS-services, the ARN of the AWS resource that invokes the function.

For example, an Amazon S3 bucket or Amazon SNS topic.
 Note that Lambda configures the comparison using the ``StringLike`` operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}

---



