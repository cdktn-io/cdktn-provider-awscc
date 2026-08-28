# `cognitoUserPoolDomain` Submodule <a name="`cognitoUserPoolDomain` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolDomain <a name="CognitoUserPoolDomain" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain awscc_cognito_user_pool_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

new cognitoUserPoolDomain.CognitoUserPoolDomain(scope: Construct, id: string, config: CognitoUserPoolDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig">CognitoUserPoolDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig">CognitoUserPoolDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putCustomDomainConfig">putCustomDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetCustomDomainConfig">resetCustomDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetManagedLoginVersion">resetManagedLoginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetRouting">resetRouting</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomDomainConfig` <a name="putCustomDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putCustomDomainConfig"></a>

```typescript
public putCustomDomainConfig(value: CognitoUserPoolDomainCustomDomainConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putCustomDomainConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

---

##### `putRouting` <a name="putRouting" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putRouting"></a>

```typescript
public putRouting(value: CognitoUserPoolDomainRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

---

##### `resetCustomDomainConfig` <a name="resetCustomDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetCustomDomainConfig"></a>

```typescript
public resetCustomDomainConfig(): void
```

##### `resetManagedLoginVersion` <a name="resetManagedLoginVersion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetManagedLoginVersion"></a>

```typescript
public resetManagedLoginVersion(): void
```

##### `resetRouting` <a name="resetRouting" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.resetRouting"></a>

```typescript
public resetRouting(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitoUserPoolDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistribution">cloudfrontDistribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfig">customDomainConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference">CognitoUserPoolDomainCustomDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routing">routing</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference">CognitoUserPoolDomainRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfigInput">customDomainConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersionInput">managedLoginVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routingInput">routingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersion">managedLoginVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudfrontDistribution`<sup>Required</sup> <a name="cloudfrontDistribution" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistribution"></a>

```typescript
public readonly cloudfrontDistribution: string;
```

- *Type:* string

---

##### `customDomainConfig`<sup>Required</sup> <a name="customDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfig"></a>

```typescript
public readonly customDomainConfig: CognitoUserPoolDomainCustomDomainConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference">CognitoUserPoolDomainCustomDomainConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routing"></a>

```typescript
public readonly routing: CognitoUserPoolDomainRoutingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference">CognitoUserPoolDomainRoutingOutputReference</a>

---

##### `customDomainConfigInput`<sup>Optional</sup> <a name="customDomainConfigInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.customDomainConfigInput"></a>

```typescript
public readonly customDomainConfigInput: IResolvable | CognitoUserPoolDomainCustomDomainConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `managedLoginVersionInput`<sup>Optional</sup> <a name="managedLoginVersionInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersionInput"></a>

```typescript
public readonly managedLoginVersionInput: number;
```

- *Type:* number

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.routingInput"></a>

```typescript
public readonly routingInput: IResolvable | CognitoUserPoolDomainRouting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `managedLoginVersion`<sup>Required</sup> <a name="managedLoginVersion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersion"></a>

```typescript
public readonly managedLoginVersion: number;
```

- *Type:* number

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolDomainConfig <a name="CognitoUserPoolDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.Initializer"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

const cognitoUserPoolDomainConfig: cognitoUserPoolDomain.CognitoUserPoolDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.customDomainConfig">customDomainConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#custom_domain_config CognitoUserPoolDomain#custom_domain_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.managedLoginVersion">managedLoginVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.routing">routing</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#routing CognitoUserPoolDomain#routing}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}.

---

##### `customDomainConfig`<sup>Optional</sup> <a name="customDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.customDomainConfig"></a>

```typescript
public readonly customDomainConfig: CognitoUserPoolDomainCustomDomainConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#custom_domain_config CognitoUserPoolDomain#custom_domain_config}.

---

##### `managedLoginVersion`<sup>Optional</sup> <a name="managedLoginVersion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.managedLoginVersion"></a>

```typescript
public readonly managedLoginVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}.

---

##### `routing`<sup>Optional</sup> <a name="routing" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.routing"></a>

```typescript
public readonly routing: CognitoUserPoolDomainRouting;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#routing CognitoUserPoolDomain#routing}.

---

### CognitoUserPoolDomainCustomDomainConfig <a name="CognitoUserPoolDomainCustomDomainConfig" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.Initializer"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

const cognitoUserPoolDomainCustomDomainConfig: cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#security_policy CognitoUserPoolDomain#security_policy}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}.

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#security_policy CognitoUserPoolDomain#security_policy}.

---

### CognitoUserPoolDomainRouting <a name="CognitoUserPoolDomainRouting" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting.Initializer"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

const cognitoUserPoolDomainRouting: cognitoUserPoolDomain.CognitoUserPoolDomainRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting.property.failover">failover</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#failover CognitoUserPoolDomain#failover}. |

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting.property.failover"></a>

```typescript
public readonly failover: CognitoUserPoolDomainRoutingFailover;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#failover CognitoUserPoolDomain#failover}.

---

### CognitoUserPoolDomainRoutingFailover <a name="CognitoUserPoolDomainRoutingFailover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.Initializer"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

const cognitoUserPoolDomainRoutingFailover: cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.primaryRoute53HealthCheckId">primaryRoute53HealthCheckId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#primary_route_53_health_check_id CognitoUserPoolDomain#primary_route_53_health_check_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.secondaryRegion">secondaryRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#secondary_region CognitoUserPoolDomain#secondary_region}. |

---

##### `primaryRoute53HealthCheckId`<sup>Optional</sup> <a name="primaryRoute53HealthCheckId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.primaryRoute53HealthCheckId"></a>

```typescript
public readonly primaryRoute53HealthCheckId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#primary_route_53_health_check_id CognitoUserPoolDomain#primary_route_53_health_check_id}.

---

##### `secondaryRegion`<sup>Optional</sup> <a name="secondaryRegion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover.property.secondaryRegion"></a>

```typescript
public readonly secondaryRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_domain#secondary_region CognitoUserPoolDomain#secondary_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolDomainCustomDomainConfigOutputReference <a name="CognitoUserPoolDomainCustomDomainConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

new cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.resetSecurityPolicy"></a>

```typescript
public resetSecurityPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolDomainCustomDomainConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainCustomDomainConfig">CognitoUserPoolDomainCustomDomainConfig</a>

---


### CognitoUserPoolDomainRoutingFailoverOutputReference <a name="CognitoUserPoolDomainRoutingFailoverOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

new cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetPrimaryRoute53HealthCheckId">resetPrimaryRoute53HealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetSecondaryRegion">resetSecondaryRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimaryRoute53HealthCheckId` <a name="resetPrimaryRoute53HealthCheckId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetPrimaryRoute53HealthCheckId"></a>

```typescript
public resetPrimaryRoute53HealthCheckId(): void
```

##### `resetSecondaryRegion` <a name="resetSecondaryRegion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.resetSecondaryRegion"></a>

```typescript
public resetSecondaryRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckIdInput">primaryRoute53HealthCheckIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegionInput">secondaryRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckId">primaryRoute53HealthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegion">secondaryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryRoute53HealthCheckIdInput`<sup>Optional</sup> <a name="primaryRoute53HealthCheckIdInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckIdInput"></a>

```typescript
public readonly primaryRoute53HealthCheckIdInput: string;
```

- *Type:* string

---

##### `secondaryRegionInput`<sup>Optional</sup> <a name="secondaryRegionInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegionInput"></a>

```typescript
public readonly secondaryRegionInput: string;
```

- *Type:* string

---

##### `primaryRoute53HealthCheckId`<sup>Required</sup> <a name="primaryRoute53HealthCheckId" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.primaryRoute53HealthCheckId"></a>

```typescript
public readonly primaryRoute53HealthCheckId: string;
```

- *Type:* string

---

##### `secondaryRegion`<sup>Required</sup> <a name="secondaryRegion" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.secondaryRegion"></a>

```typescript
public readonly secondaryRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolDomainRoutingFailover;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

---


### CognitoUserPoolDomainRoutingOutputReference <a name="CognitoUserPoolDomainRoutingOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolDomain } from '@cdktn/provider-awscc'

new cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.putFailover">putFailover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resetFailover">resetFailover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFailover` <a name="putFailover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.putFailover"></a>

```typescript
public putFailover(value: CognitoUserPoolDomainRoutingFailover): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.putFailover.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

---

##### `resetFailover` <a name="resetFailover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.resetFailover"></a>

```typescript
public resetFailover(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failover">failover</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference">CognitoUserPoolDomainRoutingFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failoverInput">failoverInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failover"></a>

```typescript
public readonly failover: CognitoUserPoolDomainRoutingFailoverOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailoverOutputReference">CognitoUserPoolDomainRoutingFailoverOutputReference</a>

---

##### `failoverInput`<sup>Optional</sup> <a name="failoverInput" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.failoverInput"></a>

```typescript
public readonly failoverInput: IResolvable | CognitoUserPoolDomainRoutingFailover;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingFailover">CognitoUserPoolDomainRoutingFailover</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolDomainRouting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolDomain.CognitoUserPoolDomainRouting">CognitoUserPoolDomainRouting</a>

---



