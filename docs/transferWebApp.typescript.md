# `transferWebApp` Submodule <a name="`transferWebApp` Submodule" id="@cdktn/provider-awscc.transferWebApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWebApp <a name="TransferWebApp" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app awscc_transfer_web_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

new transferWebApp.TransferWebApp(scope: Construct, id: string, config: TransferWebAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig">TransferWebAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig">TransferWebAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.putEndpointDetails">putEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.putIdentityProviderDetails">putIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppCustomization">putWebAppCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppUnits">putWebAppUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetAccessEndpoint">resetAccessEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetEndpointDetails">resetEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppCustomization">resetWebAppCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppEndpointPolicy">resetWebAppEndpointPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppUnits">resetWebAppUnits</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointDetails` <a name="putEndpointDetails" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putEndpointDetails"></a>

```typescript
public putEndpointDetails(value: TransferWebAppEndpointDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putEndpointDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>

---

##### `putIdentityProviderDetails` <a name="putIdentityProviderDetails" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putIdentityProviderDetails"></a>

```typescript
public putIdentityProviderDetails(value: TransferWebAppIdentityProviderDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putIdentityProviderDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putTags"></a>

```typescript
public putTags(value: IResolvable | TransferWebAppTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>[]

---

##### `putWebAppCustomization` <a name="putWebAppCustomization" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppCustomization"></a>

```typescript
public putWebAppCustomization(value: TransferWebAppWebAppCustomization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppCustomization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a>

---

##### `putWebAppUnits` <a name="putWebAppUnits" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppUnits"></a>

```typescript
public putWebAppUnits(value: TransferWebAppWebAppUnits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.putWebAppUnits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>

---

##### `resetAccessEndpoint` <a name="resetAccessEndpoint" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetAccessEndpoint"></a>

```typescript
public resetAccessEndpoint(): void
```

##### `resetEndpointDetails` <a name="resetEndpointDetails" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetEndpointDetails"></a>

```typescript
public resetEndpointDetails(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWebAppCustomization` <a name="resetWebAppCustomization" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppCustomization"></a>

```typescript
public resetWebAppCustomization(): void
```

##### `resetWebAppEndpointPolicy` <a name="resetWebAppEndpointPolicy" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppEndpointPolicy"></a>

```typescript
public resetWebAppEndpointPolicy(): void
```

##### `resetWebAppUnits` <a name="resetWebAppUnits" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.resetWebAppUnits"></a>

```typescript
public resetWebAppUnits(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransferWebApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isConstruct"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

transferWebApp.TransferWebApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformElement"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

transferWebApp.TransferWebApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformResource"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

transferWebApp.TransferWebApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

transferWebApp.TransferWebApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TransferWebApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferWebApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferWebApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransferWebApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference">TransferWebAppEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.identityProviderDetails">identityProviderDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference">TransferWebAppIdentityProviderDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList">TransferWebAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppCustomization">webAppCustomization</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference">TransferWebAppWebAppCustomizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppId">webAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppUnits">webAppUnits</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference">TransferWebAppWebAppUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.accessEndpointInput">accessEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.endpointDetailsInput">endpointDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.identityProviderDetailsInput">identityProviderDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppCustomizationInput">webAppCustomizationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppEndpointPolicyInput">webAppEndpointPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppUnitsInput">webAppUnitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.accessEndpoint">accessEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppEndpointPolicy">webAppEndpointPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpointDetails`<sup>Required</sup> <a name="endpointDetails" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: TransferWebAppEndpointDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference">TransferWebAppEndpointDetailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderDetails`<sup>Required</sup> <a name="identityProviderDetails" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.identityProviderDetails"></a>

```typescript
public readonly identityProviderDetails: TransferWebAppIdentityProviderDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference">TransferWebAppIdentityProviderDetailsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tags"></a>

```typescript
public readonly tags: TransferWebAppTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList">TransferWebAppTagsList</a>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `webAppCustomization`<sup>Required</sup> <a name="webAppCustomization" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppCustomization"></a>

```typescript
public readonly webAppCustomization: TransferWebAppWebAppCustomizationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference">TransferWebAppWebAppCustomizationOutputReference</a>

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppId"></a>

```typescript
public readonly webAppId: string;
```

- *Type:* string

---

##### `webAppUnits`<sup>Required</sup> <a name="webAppUnits" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppUnits"></a>

```typescript
public readonly webAppUnits: TransferWebAppWebAppUnitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference">TransferWebAppWebAppUnitsOutputReference</a>

---

##### `accessEndpointInput`<sup>Optional</sup> <a name="accessEndpointInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.accessEndpointInput"></a>

```typescript
public readonly accessEndpointInput: string;
```

- *Type:* string

---

##### `endpointDetailsInput`<sup>Optional</sup> <a name="endpointDetailsInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.endpointDetailsInput"></a>

```typescript
public readonly endpointDetailsInput: IResolvable | TransferWebAppEndpointDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>

---

##### `identityProviderDetailsInput`<sup>Optional</sup> <a name="identityProviderDetailsInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.identityProviderDetailsInput"></a>

```typescript
public readonly identityProviderDetailsInput: IResolvable | TransferWebAppIdentityProviderDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TransferWebAppTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>[]

---

##### `webAppCustomizationInput`<sup>Optional</sup> <a name="webAppCustomizationInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppCustomizationInput"></a>

```typescript
public readonly webAppCustomizationInput: IResolvable | TransferWebAppWebAppCustomization;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a>

---

##### `webAppEndpointPolicyInput`<sup>Optional</sup> <a name="webAppEndpointPolicyInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppEndpointPolicyInput"></a>

```typescript
public readonly webAppEndpointPolicyInput: string;
```

- *Type:* string

---

##### `webAppUnitsInput`<sup>Optional</sup> <a name="webAppUnitsInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppUnitsInput"></a>

```typescript
public readonly webAppUnitsInput: IResolvable | TransferWebAppWebAppUnits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>

---

##### `accessEndpoint`<sup>Required</sup> <a name="accessEndpoint" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.accessEndpoint"></a>

```typescript
public readonly accessEndpoint: string;
```

- *Type:* string

---

##### `webAppEndpointPolicy`<sup>Required</sup> <a name="webAppEndpointPolicy" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.webAppEndpointPolicy"></a>

```typescript
public readonly webAppEndpointPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferWebApp.TransferWebApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWebAppConfig <a name="TransferWebAppConfig" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

const transferWebAppConfig: transferWebApp.TransferWebAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.identityProviderDetails">identityProviderDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a></code> | You can provide a structure that contains the details for the identity provider to use with your web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.accessEndpoint">accessEndpoint</a></code> | <code>string</code> | The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#endpoint_details TransferWebApp#endpoint_details}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>[]</code> | Key-value pairs that can be used to group and search for web apps. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppCustomization">webAppCustomization</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_customization TransferWebApp#web_app_customization}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppEndpointPolicy">webAppEndpointPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppUnits">webAppUnits</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identityProviderDetails`<sup>Required</sup> <a name="identityProviderDetails" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.identityProviderDetails"></a>

```typescript
public readonly identityProviderDetails: TransferWebAppIdentityProviderDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>

You can provide a structure that contains the details for the identity provider to use with your web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#identity_provider_details TransferWebApp#identity_provider_details}

---

##### `accessEndpoint`<sup>Optional</sup> <a name="accessEndpoint" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.accessEndpoint"></a>

```typescript
public readonly accessEndpoint: string;
```

- *Type:* string

The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app.

You can specify a custom URL or use the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#access_endpoint TransferWebApp#access_endpoint}

---

##### `endpointDetails`<sup>Optional</sup> <a name="endpointDetails" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: TransferWebAppEndpointDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#endpoint_details TransferWebApp#endpoint_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TransferWebAppTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>[]

Key-value pairs that can be used to group and search for web apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#tags TransferWebApp#tags}

---

##### `webAppCustomization`<sup>Optional</sup> <a name="webAppCustomization" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppCustomization"></a>

```typescript
public readonly webAppCustomization: TransferWebAppWebAppCustomization;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_customization TransferWebApp#web_app_customization}.

---

##### `webAppEndpointPolicy`<sup>Optional</sup> <a name="webAppEndpointPolicy" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppEndpointPolicy"></a>

```typescript
public readonly webAppEndpointPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}.

---

##### `webAppUnits`<sup>Optional</sup> <a name="webAppUnits" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppConfig.property.webAppUnits"></a>

```typescript
public readonly webAppUnits: TransferWebAppWebAppUnits;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}.

---

### TransferWebAppEndpointDetails <a name="TransferWebAppEndpointDetails" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

const transferWebAppEndpointDetails: transferWebApp.TransferWebAppEndpointDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a></code> | You can provide a structure that contains the details for the VPC endpoint to use with your web app. |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails.property.vpc"></a>

```typescript
public readonly vpc: TransferWebAppEndpointDetailsVpc;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>

You can provide a structure that contains the details for the VPC endpoint to use with your web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#vpc TransferWebApp#vpc}

---

### TransferWebAppEndpointDetailsVpc <a name="TransferWebAppEndpointDetailsVpc" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

const transferWebAppEndpointDetailsVpc: transferWebApp.TransferWebAppEndpointDetailsVpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | The IP address type for the VPC endpoint used by the web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#security_group_ids TransferWebApp#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#subnet_ids TransferWebApp#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#vpc_id TransferWebApp#vpc_id}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

The IP address type for the VPC endpoint used by the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#ip_address_type TransferWebApp#ip_address_type}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#security_group_ids TransferWebApp#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#subnet_ids TransferWebApp#subnet_ids}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#vpc_id TransferWebApp#vpc_id}.

---

### TransferWebAppIdentityProviderDetails <a name="TransferWebAppIdentityProviderDetails" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

const transferWebAppIdentityProviderDetails: transferWebApp.TransferWebAppIdentityProviderDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails.property.instanceArn">instanceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails.property.role">role</a></code> | <code>string</code> | The IAM role in IAM Identity Center used for the web app. |

---

##### `instanceArn`<sup>Optional</sup> <a name="instanceArn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#instance_arn TransferWebApp#instance_arn}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The IAM role in IAM Identity Center used for the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#role TransferWebApp#role}

---

### TransferWebAppTags <a name="TransferWebAppTags" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTags.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

const transferWebAppTags: transferWebApp.TransferWebAppTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#key TransferWebApp#key}. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#value TransferWebApp#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#key TransferWebApp#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#value TransferWebApp#value}.

---

### TransferWebAppWebAppCustomization <a name="TransferWebAppWebAppCustomization" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

const transferWebAppWebAppCustomization: transferWebApp.TransferWebAppWebAppCustomization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.faviconFile">faviconFile</a></code> | <code>string</code> | Specifies a favicon to display in the browser tab. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.logoFile">logoFile</a></code> | <code>string</code> | Specifies a logo to display on the web app. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.title">title</a></code> | <code>string</code> | Specifies a title to display on the web app. |

---

##### `faviconFile`<sup>Optional</sup> <a name="faviconFile" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.faviconFile"></a>

```typescript
public readonly faviconFile: string;
```

- *Type:* string

Specifies a favicon to display in the browser tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#favicon_file TransferWebApp#favicon_file}

---

##### `logoFile`<sup>Optional</sup> <a name="logoFile" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.logoFile"></a>

```typescript
public readonly logoFile: string;
```

- *Type:* string

Specifies a logo to display on the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#logo_file TransferWebApp#logo_file}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Specifies a title to display on the web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#title TransferWebApp#title}

---

### TransferWebAppWebAppUnits <a name="TransferWebAppWebAppUnits" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

const transferWebAppWebAppUnits: transferWebApp.TransferWebAppWebAppUnits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits.property.provisioned">provisioned</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}. |

---

##### `provisioned`<sup>Optional</sup> <a name="provisioned" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits.property.provisioned"></a>

```typescript
public readonly provisioned: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferWebAppEndpointDetailsOutputReference <a name="TransferWebAppEndpointDetailsOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

new transferWebApp.TransferWebAppEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc">putVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpc` <a name="putVpc" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc"></a>

```typescript
public putVpc(value: TransferWebAppEndpointDetailsVpc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>

---

##### `resetVpc` <a name="resetVpc" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resetVpc"></a>

```typescript
public resetVpc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference">TransferWebAppEndpointDetailsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpcInput">vpcInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpc"></a>

```typescript
public readonly vpc: TransferWebAppEndpointDetailsVpcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference">TransferWebAppEndpointDetailsVpcOutputReference</a>

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpcInput"></a>

```typescript
public readonly vpcInput: IResolvable | TransferWebAppEndpointDetailsVpc;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppEndpointDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>

---


### TransferWebAppEndpointDetailsVpcOutputReference <a name="TransferWebAppEndpointDetailsVpcOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

new transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppEndpointDetailsVpc;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>

---


### TransferWebAppIdentityProviderDetailsOutputReference <a name="TransferWebAppIdentityProviderDetailsOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

new transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetInstanceArn">resetInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceArn` <a name="resetInstanceArn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetInstanceArn"></a>

```typescript
public resetInstanceArn(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppIdentityProviderDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>

---


### TransferWebAppTagsList <a name="TransferWebAppTagsList" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

new transferWebApp.TransferWebAppTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.get"></a>

```typescript
public get(index: number): TransferWebAppTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>[]

---


### TransferWebAppTagsOutputReference <a name="TransferWebAppTagsOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

new transferWebApp.TransferWebAppTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppTags">TransferWebAppTags</a>

---


### TransferWebAppWebAppCustomizationOutputReference <a name="TransferWebAppWebAppCustomizationOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

new transferWebApp.TransferWebAppWebAppCustomizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetFaviconFile">resetFaviconFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetLogoFile">resetLogoFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFaviconFile` <a name="resetFaviconFile" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetFaviconFile"></a>

```typescript
public resetFaviconFile(): void
```

##### `resetLogoFile` <a name="resetLogoFile" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetLogoFile"></a>

```typescript
public resetLogoFile(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.faviconFileInput">faviconFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.logoFileInput">logoFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.faviconFile">faviconFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.logoFile">logoFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `faviconFileInput`<sup>Optional</sup> <a name="faviconFileInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.faviconFileInput"></a>

```typescript
public readonly faviconFileInput: string;
```

- *Type:* string

---

##### `logoFileInput`<sup>Optional</sup> <a name="logoFileInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.logoFileInput"></a>

```typescript
public readonly logoFileInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `faviconFile`<sup>Required</sup> <a name="faviconFile" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.faviconFile"></a>

```typescript
public readonly faviconFile: string;
```

- *Type:* string

---

##### `logoFile`<sup>Required</sup> <a name="logoFile" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.logoFile"></a>

```typescript
public readonly logoFile: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppWebAppCustomization;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppCustomization">TransferWebAppWebAppCustomization</a>

---


### TransferWebAppWebAppUnitsOutputReference <a name="TransferWebAppWebAppUnitsOutputReference" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-awscc'

new transferWebApp.TransferWebAppWebAppUnitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resetProvisioned">resetProvisioned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProvisioned` <a name="resetProvisioned" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resetProvisioned"></a>

```typescript
public resetProvisioned(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisionedInput">provisionedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisioned">provisioned</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provisionedInput`<sup>Optional</sup> <a name="provisionedInput" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisionedInput"></a>

```typescript
public readonly provisionedInput: number;
```

- *Type:* number

---

##### `provisioned`<sup>Required</sup> <a name="provisioned" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisioned"></a>

```typescript
public readonly provisioned: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppWebAppUnits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>

---



