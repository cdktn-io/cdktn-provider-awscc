# `apigatewayMethod` Submodule <a name="`apigatewayMethod` Submodule" id="@cdktn/provider-awscc.apigatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayMethod <a name="ApigatewayMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method awscc_apigateway_method}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

new apigatewayMethod.ApigatewayMethod(scope: Construct, id: string, config: ApigatewayMethodConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig">ApigatewayMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig">ApigatewayMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration">putIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses">putMethodResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetApiKeyRequired">resetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationScopes">resetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetIntegration">resetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetMethodResponses">resetMethodResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOperationName">resetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestModels">resetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestValidatorId">resetRequestValidatorId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIntegration` <a name="putIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration"></a>

```typescript
public putIntegration(value: ApigatewayMethodIntegration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---

##### `putMethodResponses` <a name="putMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses"></a>

```typescript
public putMethodResponses(value: IResolvable | ApigatewayMethodMethodResponses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]

---

##### `resetApiKeyRequired` <a name="resetApiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetApiKeyRequired"></a>

```typescript
public resetApiKeyRequired(): void
```

##### `resetAuthorizationScopes` <a name="resetAuthorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationScopes"></a>

```typescript
public resetAuthorizationScopes(): void
```

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationType"></a>

```typescript
public resetAuthorizationType(): void
```

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizerId"></a>

```typescript
public resetAuthorizerId(): void
```

##### `resetIntegration` <a name="resetIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetIntegration"></a>

```typescript
public resetIntegration(): void
```

##### `resetMethodResponses` <a name="resetMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetMethodResponses"></a>

```typescript
public resetMethodResponses(): void
```

##### `resetOperationName` <a name="resetOperationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOperationName"></a>

```typescript
public resetOperationName(): void
```

##### `resetRequestModels` <a name="resetRequestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestModels"></a>

```typescript
public resetRequestModels(): void
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestParameters"></a>

```typescript
public resetRequestParameters(): void
```

##### `resetRequestValidatorId` <a name="resetRequestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestValidatorId"></a>

```typescript
public resetRequestValidatorId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayMethod resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

apigatewayMethod.ApigatewayMethod.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

apigatewayMethod.ApigatewayMethod.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

apigatewayMethod.ApigatewayMethod.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

apigatewayMethod.ApigatewayMethod.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigatewayMethod resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference">ApigatewayMethodIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponses">methodResponses</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList">ApigatewayMethodMethodResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequiredInput">apiKeyRequiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopesInput">authorizationScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerIdInput">authorizerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integrationInput">integrationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponsesInput">methodResponsesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationNameInput">operationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModelsInput">requestModelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParametersInput">requestParametersInput</a></code> | <code>{[ key: string ]: boolean \| cdktn.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorIdInput">requestValidatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequired">apiKeyRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopes">authorizationScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationType">authorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationName">operationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModels">requestModels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: boolean \| cdktn.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorId">requestValidatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integration"></a>

```typescript
public readonly integration: ApigatewayMethodIntegrationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference">ApigatewayMethodIntegrationOutputReference</a>

---

##### `methodResponses`<sup>Required</sup> <a name="methodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponses"></a>

```typescript
public readonly methodResponses: ApigatewayMethodMethodResponsesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList">ApigatewayMethodMethodResponsesList</a>

---

##### `apiKeyRequiredInput`<sup>Optional</sup> <a name="apiKeyRequiredInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequiredInput"></a>

```typescript
public readonly apiKeyRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `authorizationScopesInput`<sup>Optional</sup> <a name="authorizationScopesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopesInput"></a>

```typescript
public readonly authorizationScopesInput: string[];
```

- *Type:* string[]

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationTypeInput"></a>

```typescript
public readonly authorizationTypeInput: string;
```

- *Type:* string

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerIdInput"></a>

```typescript
public readonly authorizerIdInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integrationInput"></a>

```typescript
public readonly integrationInput: IResolvable | ApigatewayMethodIntegration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---

##### `methodResponsesInput`<sup>Optional</sup> <a name="methodResponsesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponsesInput"></a>

```typescript
public readonly methodResponsesInput: IResolvable | ApigatewayMethodMethodResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]

---

##### `operationNameInput`<sup>Optional</sup> <a name="operationNameInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationNameInput"></a>

```typescript
public readonly operationNameInput: string;
```

- *Type:* string

---

##### `requestModelsInput`<sup>Optional</sup> <a name="requestModelsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModelsInput"></a>

```typescript
public readonly requestModelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParametersInput"></a>

```typescript
public readonly requestParametersInput: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktn.IResolvable}

---

##### `requestValidatorIdInput`<sup>Optional</sup> <a name="requestValidatorIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorIdInput"></a>

```typescript
public readonly requestValidatorIdInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `apiKeyRequired`<sup>Required</sup> <a name="apiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequired"></a>

```typescript
public readonly apiKeyRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `authorizationScopes`<sup>Required</sup> <a name="authorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopes"></a>

```typescript
public readonly authorizationScopes: string[];
```

- *Type:* string[]

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

---

##### `requestModels`<sup>Required</sup> <a name="requestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModels"></a>

```typescript
public readonly requestModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktn.IResolvable}

---

##### `requestValidatorId`<sup>Required</sup> <a name="requestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorId"></a>

```typescript
public readonly requestValidatorId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayMethodConfig <a name="ApigatewayMethodConfig" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.Initializer"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

const apigatewayMethodConfig: apigatewayMethod.ApigatewayMethodConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.apiKeyRequired">apiKeyRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationScopes">authorizationScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationType">authorizationType</a></code> | <code>string</code> | The method's authorization type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizerId">authorizerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | ``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.methodResponses">methodResponses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.operationName">operationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestModels">requestModels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: boolean \| cdktn.IResolvable}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestValidatorId">requestValidatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}.

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.apiKeyRequired"></a>

```typescript
public readonly apiKeyRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}.

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationScopes"></a>

```typescript
public readonly authorizationScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}.

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

The method's authorization type.

This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
  If you specify the ``AuthorizerId`` property, specify ``CUSTOM`` or ``COGNITO_USER_POOLS`` for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_type ApigatewayMethod#authorization_type}

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.integration"></a>

```typescript
public readonly integration: ApigatewayMethodIntegration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration ApigatewayMethod#integration}

---

##### `methodResponses`<sup>Optional</sup> <a name="methodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.methodResponses"></a>

```typescript
public readonly methodResponses: IResolvable | ApigatewayMethodMethodResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}.

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}.

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestModels"></a>

```typescript
public readonly requestModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktn.IResolvable}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `requestValidatorId`<sup>Optional</sup> <a name="requestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestValidatorId"></a>

```typescript
public readonly requestValidatorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}.

---

### ApigatewayMethodIntegration <a name="ApigatewayMethodIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.Initializer"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

const apigatewayMethodIntegration: apigatewayMethod.ApigatewayMethodIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_key_parameters ApigatewayMethod#cache_key_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheNamespace">cacheNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_namespace ApigatewayMethod#cache_namespace}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_id ApigatewayMethod#connection_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionType">connectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_type ApigatewayMethod#connection_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.contentHandling">contentHandling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.credentials">credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#credentials ApigatewayMethod#credentials}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationHttpMethod">integrationHttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_http_method ApigatewayMethod#integration_http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationResponses">integrationResponses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_responses ApigatewayMethod#integration_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationTarget">integrationTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_target ApigatewayMethod#integration_target}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.passthroughBehavior">passthroughBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#passthrough_behavior ApigatewayMethod#passthrough_behavior}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestTemplates">requestTemplates</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_templates ApigatewayMethod#request_templates}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.responseTransferMode">responseTransferMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_transfer_mode ApigatewayMethod#response_transfer_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#timeout_in_millis ApigatewayMethod#timeout_in_millis}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#type ApigatewayMethod#type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#uri ApigatewayMethod#uri}. |

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="cacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheKeyParameters"></a>

```typescript
public readonly cacheKeyParameters: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_key_parameters ApigatewayMethod#cache_key_parameters}.

---

##### `cacheNamespace`<sup>Optional</sup> <a name="cacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheNamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_namespace ApigatewayMethod#cache_namespace}.

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_id ApigatewayMethod#connection_id}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_type ApigatewayMethod#connection_type}.

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#credentials ApigatewayMethod#credentials}.

---

##### `integrationHttpMethod`<sup>Optional</sup> <a name="integrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationHttpMethod"></a>

```typescript
public readonly integrationHttpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_http_method ApigatewayMethod#integration_http_method}.

---

##### `integrationResponses`<sup>Optional</sup> <a name="integrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationResponses"></a>

```typescript
public readonly integrationResponses: IResolvable | ApigatewayMethodIntegrationIntegrationResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_responses ApigatewayMethod#integration_responses}.

---

##### `integrationTarget`<sup>Optional</sup> <a name="integrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationTarget"></a>

```typescript
public readonly integrationTarget: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_target ApigatewayMethod#integration_target}.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#passthrough_behavior ApigatewayMethod#passthrough_behavior}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_templates ApigatewayMethod#request_templates}.

---

##### `responseTransferMode`<sup>Optional</sup> <a name="responseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.responseTransferMode"></a>

```typescript
public readonly responseTransferMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_transfer_mode ApigatewayMethod#response_transfer_mode}.

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="timeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#timeout_in_millis ApigatewayMethod#timeout_in_millis}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#type ApigatewayMethod#type}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#uri ApigatewayMethod#uri}.

---

### ApigatewayMethodIntegrationIntegrationResponses <a name="ApigatewayMethodIntegrationIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.Initializer"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

const apigatewayMethodIntegrationIntegrationResponses: apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.contentHandling">contentHandling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseParameters">responseParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseTemplates">responseTemplates</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_templates ApigatewayMethod#response_templates}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.selectionPattern">selectionPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#selection_pattern ApigatewayMethod#selection_pattern}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}. |

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseParameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}.

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_templates ApigatewayMethod#response_templates}.

---

##### `selectionPattern`<sup>Optional</sup> <a name="selectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.selectionPattern"></a>

```typescript
public readonly selectionPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#selection_pattern ApigatewayMethod#selection_pattern}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}.

---

### ApigatewayMethodMethodResponses <a name="ApigatewayMethodMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.Initializer"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

const apigatewayMethodMethodResponses: apigatewayMethod.ApigatewayMethodMethodResponses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseModels">responseModels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_models ApigatewayMethod#response_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseParameters">responseParameters</a></code> | <code>{[ key: string ]: boolean \| cdktn.IResolvable}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}. |

---

##### `responseModels`<sup>Optional</sup> <a name="responseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseModels"></a>

```typescript
public readonly responseModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_models ApigatewayMethod#response_models}.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseParameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktn.IResolvable}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayMethodIntegrationIntegrationResponsesList <a name="ApigatewayMethodIntegrationIntegrationResponsesList" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

new apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get"></a>

```typescript
public get(index: number): ApigatewayMethodIntegrationIntegrationResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayMethodIntegrationIntegrationResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]

---


### ApigatewayMethodIntegrationIntegrationResponsesOutputReference <a name="ApigatewayMethodIntegrationIntegrationResponsesOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

new apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetContentHandling">resetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseTemplates">resetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetSelectionPattern">resetSelectionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentHandling` <a name="resetContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetContentHandling"></a>

```typescript
public resetContentHandling(): void
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseParameters"></a>

```typescript
public resetResponseParameters(): void
```

##### `resetResponseTemplates` <a name="resetResponseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseTemplates"></a>

```typescript
public resetResponseTemplates(): void
```

##### `resetSelectionPattern` <a name="resetSelectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetSelectionPattern"></a>

```typescript
public resetSelectionPattern(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandlingInput">contentHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParametersInput">responseParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplatesInput">responseTemplatesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPatternInput">selectionPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling">contentHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters">responseParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates">responseTemplates</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern">selectionPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentHandlingInput`<sup>Optional</sup> <a name="contentHandlingInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandlingInput"></a>

```typescript
public readonly contentHandlingInput: string;
```

- *Type:* string

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParametersInput"></a>

```typescript
public readonly responseParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseTemplatesInput`<sup>Optional</sup> <a name="responseTemplatesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplatesInput"></a>

```typescript
public readonly responseTemplatesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `selectionPatternInput`<sup>Optional</sup> <a name="selectionPatternInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPatternInput"></a>

```typescript
public readonly selectionPatternInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `contentHandling`<sup>Required</sup> <a name="contentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseTemplates`<sup>Required</sup> <a name="responseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `selectionPattern`<sup>Required</sup> <a name="selectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern"></a>

```typescript
public readonly selectionPattern: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayMethodIntegrationIntegrationResponses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>

---


### ApigatewayMethodIntegrationOutputReference <a name="ApigatewayMethodIntegrationOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

new apigatewayMethod.ApigatewayMethodIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses">putIntegrationResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheKeyParameters">resetCacheKeyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheNamespace">resetCacheNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetContentHandling">resetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationHttpMethod">resetIntegrationHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationResponses">resetIntegrationResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationTarget">resetIntegrationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetPassthroughBehavior">resetPassthroughBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestTemplates">resetRequestTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetResponseTransferMode">resetResponseTransferMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetTimeoutInMillis">resetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntegrationResponses` <a name="putIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses"></a>

```typescript
public putIntegrationResponses(value: IResolvable | ApigatewayMethodIntegrationIntegrationResponses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]

---

##### `resetCacheKeyParameters` <a name="resetCacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheKeyParameters"></a>

```typescript
public resetCacheKeyParameters(): void
```

##### `resetCacheNamespace` <a name="resetCacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheNamespace"></a>

```typescript
public resetCacheNamespace(): void
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionId"></a>

```typescript
public resetConnectionId(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetContentHandling` <a name="resetContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetContentHandling"></a>

```typescript
public resetContentHandling(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetIntegrationHttpMethod` <a name="resetIntegrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationHttpMethod"></a>

```typescript
public resetIntegrationHttpMethod(): void
```

##### `resetIntegrationResponses` <a name="resetIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationResponses"></a>

```typescript
public resetIntegrationResponses(): void
```

##### `resetIntegrationTarget` <a name="resetIntegrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationTarget"></a>

```typescript
public resetIntegrationTarget(): void
```

##### `resetPassthroughBehavior` <a name="resetPassthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetPassthroughBehavior"></a>

```typescript
public resetPassthroughBehavior(): void
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestParameters"></a>

```typescript
public resetRequestParameters(): void
```

##### `resetRequestTemplates` <a name="resetRequestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestTemplates"></a>

```typescript
public resetRequestTemplates(): void
```

##### `resetResponseTransferMode` <a name="resetResponseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetResponseTransferMode"></a>

```typescript
public resetResponseTransferMode(): void
```

##### `resetTimeoutInMillis` <a name="resetTimeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetTimeoutInMillis"></a>

```typescript
public resetTimeoutInMillis(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUri` <a name="resetUri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponses">integrationResponses</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList">ApigatewayMethodIntegrationIntegrationResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParametersInput">cacheKeyParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespaceInput">cacheNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandlingInput">contentHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentialsInput">credentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethodInput">integrationHttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponsesInput">integrationResponsesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTargetInput">integrationTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehaviorInput">passthroughBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParametersInput">requestParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplatesInput">requestTemplatesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferModeInput">responseTransferModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillisInput">timeoutInMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespace">cacheNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandling">contentHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod">integrationHttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTarget">integrationTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehavior">passthroughBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParameters">requestParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplates">requestTemplates</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferMode">responseTransferMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `integrationResponses`<sup>Required</sup> <a name="integrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponses"></a>

```typescript
public readonly integrationResponses: ApigatewayMethodIntegrationIntegrationResponsesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList">ApigatewayMethodIntegrationIntegrationResponsesList</a>

---

##### `cacheKeyParametersInput`<sup>Optional</sup> <a name="cacheKeyParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParametersInput"></a>

```typescript
public readonly cacheKeyParametersInput: string[];
```

- *Type:* string[]

---

##### `cacheNamespaceInput`<sup>Optional</sup> <a name="cacheNamespaceInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespaceInput"></a>

```typescript
public readonly cacheNamespaceInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `contentHandlingInput`<sup>Optional</sup> <a name="contentHandlingInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandlingInput"></a>

```typescript
public readonly contentHandlingInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: string;
```

- *Type:* string

---

##### `integrationHttpMethodInput`<sup>Optional</sup> <a name="integrationHttpMethodInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethodInput"></a>

```typescript
public readonly integrationHttpMethodInput: string;
```

- *Type:* string

---

##### `integrationResponsesInput`<sup>Optional</sup> <a name="integrationResponsesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponsesInput"></a>

```typescript
public readonly integrationResponsesInput: IResolvable | ApigatewayMethodIntegrationIntegrationResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>[]

---

##### `integrationTargetInput`<sup>Optional</sup> <a name="integrationTargetInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTargetInput"></a>

```typescript
public readonly integrationTargetInput: string;
```

- *Type:* string

---

##### `passthroughBehaviorInput`<sup>Optional</sup> <a name="passthroughBehaviorInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehaviorInput"></a>

```typescript
public readonly passthroughBehaviorInput: string;
```

- *Type:* string

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParametersInput"></a>

```typescript
public readonly requestParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestTemplatesInput`<sup>Optional</sup> <a name="requestTemplatesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplatesInput"></a>

```typescript
public readonly requestTemplatesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseTransferModeInput`<sup>Optional</sup> <a name="responseTransferModeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferModeInput"></a>

```typescript
public readonly responseTransferModeInput: string;
```

- *Type:* string

---

##### `timeoutInMillisInput`<sup>Optional</sup> <a name="timeoutInMillisInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillisInput"></a>

```typescript
public readonly timeoutInMillisInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `cacheKeyParameters`<sup>Required</sup> <a name="cacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters"></a>

```typescript
public readonly cacheKeyParameters: string[];
```

- *Type:* string[]

---

##### `cacheNamespace`<sup>Required</sup> <a name="cacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespace"></a>

```typescript
public readonly cacheNamespace: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `contentHandling`<sup>Required</sup> <a name="contentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandling"></a>

```typescript
public readonly contentHandling: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `integrationHttpMethod`<sup>Required</sup> <a name="integrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod"></a>

```typescript
public readonly integrationHttpMethod: string;
```

- *Type:* string

---

##### `integrationTarget`<sup>Required</sup> <a name="integrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTarget"></a>

```typescript
public readonly integrationTarget: string;
```

- *Type:* string

---

##### `passthroughBehavior`<sup>Required</sup> <a name="passthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehavior"></a>

```typescript
public readonly passthroughBehavior: string;
```

- *Type:* string

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParameters"></a>

```typescript
public readonly requestParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestTemplates`<sup>Required</sup> <a name="requestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplates"></a>

```typescript
public readonly requestTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseTransferMode`<sup>Required</sup> <a name="responseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferMode"></a>

```typescript
public readonly responseTransferMode: string;
```

- *Type:* string

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayMethodIntegration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---


### ApigatewayMethodMethodResponsesList <a name="ApigatewayMethodMethodResponsesList" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

new apigatewayMethod.ApigatewayMethodMethodResponsesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get"></a>

```typescript
public get(index: number): ApigatewayMethodMethodResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayMethodMethodResponses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>[]

---


### ApigatewayMethodMethodResponsesOutputReference <a name="ApigatewayMethodMethodResponsesOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer"></a>

```typescript
import { apigatewayMethod } from '@cdktn/provider-awscc'

new apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseModels">resetResponseModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResponseModels` <a name="resetResponseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseModels"></a>

```typescript
public resetResponseModels(): void
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseParameters"></a>

```typescript
public resetResponseParameters(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModelsInput">responseModelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParametersInput">responseParametersInput</a></code> | <code>{[ key: string ]: boolean \| cdktn.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModels">responseModels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParameters">responseParameters</a></code> | <code>{[ key: string ]: boolean \| cdktn.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responseModelsInput`<sup>Optional</sup> <a name="responseModelsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModelsInput"></a>

```typescript
public readonly responseModelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParametersInput"></a>

```typescript
public readonly responseParametersInput: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktn.IResolvable}

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `responseModels`<sup>Required</sup> <a name="responseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModels"></a>

```typescript
public readonly responseModels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParameters"></a>

```typescript
public readonly responseParameters: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktn.IResolvable}

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayMethodMethodResponses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>

---



