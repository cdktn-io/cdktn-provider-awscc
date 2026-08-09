# `quicksightOAuthClientApplication` Submodule <a name="`quicksightOAuthClientApplication` Submodule" id="@cdktn/provider-awscc.quicksightOAuthClientApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightOAuthClientApplication <a name="QuicksightOAuthClientApplication" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application awscc_quicksight_o_auth_client_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer"></a>

```typescript
import { quicksightOAuthClientApplication } from '@cdktn/provider-awscc'

new quicksightOAuthClientApplication.QuicksightOAuthClientApplication(scope: Construct, id: string, config: QuicksightOAuthClientApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig">QuicksightOAuthClientApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig">QuicksightOAuthClientApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties">putIdentityProviderVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetDataSourceType">resetDataSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetIdentityProviderVpcConnectionProperties">resetIdentityProviderVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthAuthorizationEndpointUrl">resetOAuthAuthorizationEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthScopes">resetOAuthScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentityProviderVpcConnectionProperties` <a name="putIdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties"></a>

```typescript
public putIdentityProviderVpcConnectionProperties(value: QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putIdentityProviderVpcConnectionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags"></a>

```typescript
public putTags(value: IResolvable | QuicksightOAuthClientApplicationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]

---

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetDataSourceType` <a name="resetDataSourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetDataSourceType"></a>

```typescript
public resetDataSourceType(): void
```

##### `resetIdentityProviderVpcConnectionProperties` <a name="resetIdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetIdentityProviderVpcConnectionProperties"></a>

```typescript
public resetIdentityProviderVpcConnectionProperties(): void
```

##### `resetOAuthAuthorizationEndpointUrl` <a name="resetOAuthAuthorizationEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthAuthorizationEndpointUrl"></a>

```typescript
public resetOAuthAuthorizationEndpointUrl(): void
```

##### `resetOAuthScopes` <a name="resetOAuthScopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetOAuthScopes"></a>

```typescript
public resetOAuthScopes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightOAuthClientApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct"></a>

```typescript
import { quicksightOAuthClientApplication } from '@cdktn/provider-awscc'

quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement"></a>

```typescript
import { quicksightOAuthClientApplication } from '@cdktn/provider-awscc'

quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource"></a>

```typescript
import { quicksightOAuthClientApplication } from '@cdktn/provider-awscc'

quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport"></a>

```typescript
import { quicksightOAuthClientApplication } from '@cdktn/provider-awscc'

quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QuicksightOAuthClientApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightOAuthClientApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightOAuthClientApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightOAuthClientApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionProperties">identityProviderVpcConnectionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList">QuicksightOAuthClientApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceTypeInput">dataSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionPropertiesInput">identityProviderVpcConnectionPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrlInput">oAuthAuthorizationEndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationIdInput">oAuthClientApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationTypeInput">oAuthClientAuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopesInput">oAuthScopesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrlInput">oAuthTokenEndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrl">oAuthAuthorizationEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationId">oAuthClientApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationType">oAuthClientAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopes">oAuthScopes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrl">oAuthTokenEndpointUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderVpcConnectionProperties`<sup>Required</sup> <a name="identityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionProperties"></a>

```typescript
public readonly identityProviderVpcConnectionProperties: QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference</a>

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tags"></a>

```typescript
public readonly tags: QuicksightOAuthClientApplicationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList">QuicksightOAuthClientApplicationTagsList</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `dataSourceTypeInput`<sup>Optional</sup> <a name="dataSourceTypeInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceTypeInput"></a>

```typescript
public readonly dataSourceTypeInput: string;
```

- *Type:* string

---

##### `identityProviderVpcConnectionPropertiesInput`<sup>Optional</sup> <a name="identityProviderVpcConnectionPropertiesInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.identityProviderVpcConnectionPropertiesInput"></a>

```typescript
public readonly identityProviderVpcConnectionPropertiesInput: IResolvable | QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oAuthAuthorizationEndpointUrlInput`<sup>Optional</sup> <a name="oAuthAuthorizationEndpointUrlInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrlInput"></a>

```typescript
public readonly oAuthAuthorizationEndpointUrlInput: string;
```

- *Type:* string

---

##### `oAuthClientApplicationIdInput`<sup>Optional</sup> <a name="oAuthClientApplicationIdInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationIdInput"></a>

```typescript
public readonly oAuthClientApplicationIdInput: string;
```

- *Type:* string

---

##### `oAuthClientAuthenticationTypeInput`<sup>Optional</sup> <a name="oAuthClientAuthenticationTypeInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationTypeInput"></a>

```typescript
public readonly oAuthClientAuthenticationTypeInput: string;
```

- *Type:* string

---

##### `oAuthScopesInput`<sup>Optional</sup> <a name="oAuthScopesInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopesInput"></a>

```typescript
public readonly oAuthScopesInput: string;
```

- *Type:* string

---

##### `oAuthTokenEndpointUrlInput`<sup>Optional</sup> <a name="oAuthTokenEndpointUrlInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrlInput"></a>

```typescript
public readonly oAuthTokenEndpointUrlInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | QuicksightOAuthClientApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oAuthAuthorizationEndpointUrl`<sup>Required</sup> <a name="oAuthAuthorizationEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrl"></a>

```typescript
public readonly oAuthAuthorizationEndpointUrl: string;
```

- *Type:* string

---

##### `oAuthClientApplicationId`<sup>Required</sup> <a name="oAuthClientApplicationId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientApplicationId"></a>

```typescript
public readonly oAuthClientApplicationId: string;
```

- *Type:* string

---

##### `oAuthClientAuthenticationType`<sup>Required</sup> <a name="oAuthClientAuthenticationType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthClientAuthenticationType"></a>

```typescript
public readonly oAuthClientAuthenticationType: string;
```

- *Type:* string

---

##### `oAuthScopes`<sup>Required</sup> <a name="oAuthScopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthScopes"></a>

```typescript
public readonly oAuthScopes: string;
```

- *Type:* string

---

##### `oAuthTokenEndpointUrl`<sup>Required</sup> <a name="oAuthTokenEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.oAuthTokenEndpointUrl"></a>

```typescript
public readonly oAuthTokenEndpointUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightOAuthClientApplicationConfig <a name="QuicksightOAuthClientApplicationConfig" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.Initializer"></a>

```typescript
import { quicksightOAuthClientApplication } from '@cdktn/provider-awscc'

const quicksightOAuthClientApplicationConfig: quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#name QuicksightOAuthClientApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientApplicationId">oAuthClientApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_application_id QuicksightOAuthClientApplication#o_auth_client_application_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientAuthenticationType">oAuthClientAuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_authentication_type QuicksightOAuthClientApplication#o_auth_client_authentication_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthTokenEndpointUrl">oAuthTokenEndpointUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_token_endpoint_url QuicksightOAuthClientApplication#o_auth_token_endpoint_url}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_id QuicksightOAuthClientApplication#client_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_secret QuicksightOAuthClientApplication#client_secret}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#data_source_type QuicksightOAuthClientApplication#data_source_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.identityProviderVpcConnectionProperties">identityProviderVpcConnectionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#identity_provider_vpc_connection_properties QuicksightOAuthClientApplication#identity_provider_vpc_connection_properties}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthAuthorizationEndpointUrl">oAuthAuthorizationEndpointUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_authorization_endpoint_url QuicksightOAuthClientApplication#o_auth_authorization_endpoint_url}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthScopes">oAuthScopes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_scopes QuicksightOAuthClientApplication#o_auth_scopes}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#tags QuicksightOAuthClientApplication#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#name QuicksightOAuthClientApplication#name}.

---

##### `oAuthClientApplicationId`<sup>Required</sup> <a name="oAuthClientApplicationId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientApplicationId"></a>

```typescript
public readonly oAuthClientApplicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_application_id QuicksightOAuthClientApplication#o_auth_client_application_id}.

---

##### `oAuthClientAuthenticationType`<sup>Required</sup> <a name="oAuthClientAuthenticationType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthClientAuthenticationType"></a>

```typescript
public readonly oAuthClientAuthenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_client_authentication_type QuicksightOAuthClientApplication#o_auth_client_authentication_type}.

---

##### `oAuthTokenEndpointUrl`<sup>Required</sup> <a name="oAuthTokenEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthTokenEndpointUrl"></a>

```typescript
public readonly oAuthTokenEndpointUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_token_endpoint_url QuicksightOAuthClientApplication#o_auth_token_endpoint_url}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_id QuicksightOAuthClientApplication#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#client_secret QuicksightOAuthClientApplication#client_secret}.

---

##### `dataSourceType`<sup>Optional</sup> <a name="dataSourceType" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#data_source_type QuicksightOAuthClientApplication#data_source_type}.

---

##### `identityProviderVpcConnectionProperties`<sup>Optional</sup> <a name="identityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.identityProviderVpcConnectionProperties"></a>

```typescript
public readonly identityProviderVpcConnectionProperties: QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#identity_provider_vpc_connection_properties QuicksightOAuthClientApplication#identity_provider_vpc_connection_properties}.

---

##### `oAuthAuthorizationEndpointUrl`<sup>Optional</sup> <a name="oAuthAuthorizationEndpointUrl" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthAuthorizationEndpointUrl"></a>

```typescript
public readonly oAuthAuthorizationEndpointUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_authorization_endpoint_url QuicksightOAuthClientApplication#o_auth_authorization_endpoint_url}.

---

##### `oAuthScopes`<sup>Optional</sup> <a name="oAuthScopes" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.oAuthScopes"></a>

```typescript
public readonly oAuthScopes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#o_auth_scopes QuicksightOAuthClientApplication#o_auth_scopes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | QuicksightOAuthClientApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#tags QuicksightOAuthClientApplication#tags}.

---

### QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties <a name="QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.Initializer"></a>

```typescript
import { quicksightOAuthClientApplication } from '@cdktn/provider-awscc'

const quicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties: quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.property.vpcConnectionArn">vpcConnectionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#vpc_connection_arn QuicksightOAuthClientApplication#vpc_connection_arn}. |

---

##### `vpcConnectionArn`<sup>Optional</sup> <a name="vpcConnectionArn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.property.vpcConnectionArn"></a>

```typescript
public readonly vpcConnectionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#vpc_connection_arn QuicksightOAuthClientApplication#vpc_connection_arn}.

---

### QuicksightOAuthClientApplicationTags <a name="QuicksightOAuthClientApplicationTags" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.Initializer"></a>

```typescript
import { quicksightOAuthClientApplication } from '@cdktn/provider-awscc'

const quicksightOAuthClientApplicationTags: quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#key QuicksightOAuthClientApplication#key}. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#value QuicksightOAuthClientApplication#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#key QuicksightOAuthClientApplication#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_o_auth_client_application#value QuicksightOAuthClientApplication#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference <a name="QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer"></a>

```typescript
import { quicksightOAuthClientApplication } from '@cdktn/provider-awscc'

new quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resetVpcConnectionArn">resetVpcConnectionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcConnectionArn` <a name="resetVpcConnectionArn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resetVpcConnectionArn"></a>

```typescript
public resetVpcConnectionArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput">vpcConnectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArn">vpcConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConnectionArnInput`<sup>Optional</sup> <a name="vpcConnectionArnInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArnInput"></a>

```typescript
public readonly vpcConnectionArnInput: string;
```

- *Type:* string

---

##### `vpcConnectionArn`<sup>Required</sup> <a name="vpcConnectionArn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArn"></a>

```typescript
public readonly vpcConnectionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">QuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

---


### QuicksightOAuthClientApplicationTagsList <a name="QuicksightOAuthClientApplicationTagsList" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer"></a>

```typescript
import { quicksightOAuthClientApplication } from '@cdktn/provider-awscc'

new quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get"></a>

```typescript
public get(index: number): QuicksightOAuthClientApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightOAuthClientApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>[]

---


### QuicksightOAuthClientApplicationTagsOutputReference <a name="QuicksightOAuthClientApplicationTagsOutputReference" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer"></a>

```typescript
import { quicksightOAuthClientApplication } from '@cdktn/provider-awscc'

new quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightOAuthClientApplicationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightOAuthClientApplication.QuicksightOAuthClientApplicationTags">QuicksightOAuthClientApplicationTags</a>

---



