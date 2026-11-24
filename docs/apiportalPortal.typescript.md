# `apiportalPortal` Submodule <a name="`apiportalPortal` Submodule" id="@cdktn/provider-awscc.apiportalPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalPortal <a name="ApiportalPortal" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal awscc_apiportal_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortal(scope: Construct, id: string, config: ApiportalPortalConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig">ApiportalPortalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig">ApiportalPortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent">putPortalContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetIncludedProductArns">resetIncludedProductArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetLogoUri">resetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetRumAppMonitorName">resetRumAppMonitorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization"></a>

```typescript
public putAuthorization(value: ApiportalPortalAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

---

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration"></a>

```typescript
public putEndpointConfiguration(value: ApiportalPortalEndpointConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

---

##### `putPortalContent` <a name="putPortalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent"></a>

```typescript
public putPortalContent(value: ApiportalPortalPortalContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags"></a>

```typescript
public putTags(value: IResolvable | ApiportalPortalTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]

---

##### `resetIncludedProductArns` <a name="resetIncludedProductArns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetIncludedProductArns"></a>

```typescript
public resetIncludedProductArns(): void
```

##### `resetLogoUri` <a name="resetLogoUri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetLogoUri"></a>

```typescript
public resetLogoUri(): void
```

##### `resetRumAppMonitorName` <a name="resetRumAppMonitorName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetRumAppMonitorName"></a>

```typescript
public resetRumAppMonitorName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalPortal resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

apiportalPortal.ApiportalPortal.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

apiportalPortal.ApiportalPortal.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

apiportalPortal.ApiportalPortal.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

apiportalPortal.ApiportalPortal.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiportalPortal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiportalPortal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiportalPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference">ApiportalPortalAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference">ApiportalPortalEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalArn">portalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContent">portalContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference">ApiportalPortalPortalContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalId">portalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishDescription">publishDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishedAt">publishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishStatus">publishStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.statusException">statusException</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference">ApiportalPortalStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList">ApiportalPortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorizationInput">authorizationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArnsInput">includedProductArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUriInput">logoUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContentInput">portalContentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorNameInput">rumAppMonitorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArns">includedProductArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUri">logoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorName">rumAppMonitorName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorization"></a>

```typescript
public readonly authorization: ApiportalPortalAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference">ApiportalPortalAuthorizationOutputReference</a>

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: ApiportalPortalEndpointConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference">ApiportalPortalEndpointConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portalArn`<sup>Required</sup> <a name="portalArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalArn"></a>

```typescript
public readonly portalArn: string;
```

- *Type:* string

---

##### `portalContent`<sup>Required</sup> <a name="portalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContent"></a>

```typescript
public readonly portalContent: ApiportalPortalPortalContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference">ApiportalPortalPortalContentOutputReference</a>

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

---

##### `publishDescription`<sup>Required</sup> <a name="publishDescription" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishDescription"></a>

```typescript
public readonly publishDescription: string;
```

- *Type:* string

---

##### `publishedAt`<sup>Required</sup> <a name="publishedAt" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishedAt"></a>

```typescript
public readonly publishedAt: string;
```

- *Type:* string

---

##### `publishStatus`<sup>Required</sup> <a name="publishStatus" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishStatus"></a>

```typescript
public readonly publishStatus: string;
```

- *Type:* string

---

##### `statusException`<sup>Required</sup> <a name="statusException" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.statusException"></a>

```typescript
public readonly statusException: ApiportalPortalStatusExceptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference">ApiportalPortalStatusExceptionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tags"></a>

```typescript
public readonly tags: ApiportalPortalTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList">ApiportalPortalTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: IResolvable | ApiportalPortalAuthorization;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfigurationInput"></a>

```typescript
public readonly endpointConfigurationInput: IResolvable | ApiportalPortalEndpointConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

---

##### `includedProductArnsInput`<sup>Optional</sup> <a name="includedProductArnsInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArnsInput"></a>

```typescript
public readonly includedProductArnsInput: string[];
```

- *Type:* string[]

---

##### `logoUriInput`<sup>Optional</sup> <a name="logoUriInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUriInput"></a>

```typescript
public readonly logoUriInput: string;
```

- *Type:* string

---

##### `portalContentInput`<sup>Optional</sup> <a name="portalContentInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContentInput"></a>

```typescript
public readonly portalContentInput: IResolvable | ApiportalPortalPortalContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

---

##### `rumAppMonitorNameInput`<sup>Optional</sup> <a name="rumAppMonitorNameInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorNameInput"></a>

```typescript
public readonly rumAppMonitorNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApiportalPortalTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]

---

##### `includedProductArns`<sup>Required</sup> <a name="includedProductArns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArns"></a>

```typescript
public readonly includedProductArns: string[];
```

- *Type:* string[]

---

##### `logoUri`<sup>Required</sup> <a name="logoUri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUri"></a>

```typescript
public readonly logoUri: string;
```

- *Type:* string

---

##### `rumAppMonitorName`<sup>Required</sup> <a name="rumAppMonitorName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorName"></a>

```typescript
public readonly rumAppMonitorName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalPortalAuthorization <a name="ApiportalPortalAuthorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

const apiportalPortalAuthorization: apiportalPortal.ApiportalPortalAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | Exactly one of the members is set: None for no authorization, or CognitoConfig for Amazon Cognito. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.fineGrainedAccessControl">fineGrainedAccessControl</a></code> | <code>string</code> | Whether fine-grained access control is enforced for the portal. No default: the template states the posture explicitly. |

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: ApiportalPortalAuthorizationAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

Exactly one of the members is set: None for no authorization, or CognitoConfig for Amazon Cognito.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization_config ApiportalPortal#authorization_config}

---

##### `fineGrainedAccessControl`<sup>Required</sup> <a name="fineGrainedAccessControl" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.fineGrainedAccessControl"></a>

```typescript
public readonly fineGrainedAccessControl: string;
```

- *Type:* string

Whether fine-grained access control is enforced for the portal. No default: the template states the posture explicitly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#fine_grained_access_control ApiportalPortal#fine_grained_access_control}

---

### ApiportalPortalAuthorizationAuthorizationConfig <a name="ApiportalPortalAuthorizationAuthorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

const apiportalPortalAuthorizationAuthorizationConfig: apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | The configuration for using Amazon Cognito user pools to control access to your portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.none">none</a></code> | <code>string</code> | Provide no authorization for your portal. This makes your portal publicly accessible on the web. |

---

##### `cognitoConfig`<sup>Optional</sup> <a name="cognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.cognitoConfig"></a>

```typescript
public readonly cognitoConfig: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

The configuration for using Amazon Cognito user pools to control access to your portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#cognito_config ApiportalPortal#cognito_config}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.none"></a>

```typescript
public readonly none: string;
```

- *Type:* string

Provide no authorization for your portal. This makes your portal publicly accessible on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}

---

### ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig <a name="ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

const apiportalPortalAuthorizationAuthorizationConfigCognitoConfig: apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.appClientId">appClientId</a></code> | <code>string</code> | The app client ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | The user pool ARN. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | The user pool domain. |

---

##### `appClientId`<sup>Optional</sup> <a name="appClientId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.appClientId"></a>

```typescript
public readonly appClientId: string;
```

- *Type:* string

The app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#app_client_id ApiportalPortal#app_client_id}

---

##### `userPoolArn`<sup>Optional</sup> <a name="userPoolArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

The user pool ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_arn ApiportalPortal#user_pool_arn}

---

##### `userPoolDomain`<sup>Optional</sup> <a name="userPoolDomain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

The user pool domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_domain ApiportalPortal#user_pool_domain}

---

### ApiportalPortalConfig <a name="ApiportalPortalConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

const apiportalPortalConfig: apiportalPortal.ApiportalPortalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | Represents an authorization configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | Represents an endpoint configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.portalContent">portalContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | Contains the content that is visible to portal consumers including the themes, display names, and description. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.includedProductArns">includedProductArns</a></code> | <code>string[]</code> | The ARNs of the products included in the portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.logoUri">logoUri</a></code> | <code>string</code> | The logo URI. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.rumAppMonitorName">rumAppMonitorName</a></code> | <code>string</code> | The name of the Amazon CloudWatch RUM app monitor. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]</code> | The tags associated with a portal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.authorization"></a>

```typescript
public readonly authorization: ApiportalPortalAuthorization;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

Represents an authorization configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization ApiportalPortal#authorization}

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.endpointConfiguration"></a>

```typescript
public readonly endpointConfiguration: ApiportalPortalEndpointConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

Represents an endpoint configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#endpoint_configuration ApiportalPortal#endpoint_configuration}

---

##### `portalContent`<sup>Required</sup> <a name="portalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.portalContent"></a>

```typescript
public readonly portalContent: ApiportalPortalPortalContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

Contains the content that is visible to portal consumers including the themes, display names, and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#portal_content ApiportalPortal#portal_content}

---

##### `includedProductArns`<sup>Optional</sup> <a name="includedProductArns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.includedProductArns"></a>

```typescript
public readonly includedProductArns: string[];
```

- *Type:* string[]

The ARNs of the products included in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#included_product_arns ApiportalPortal#included_product_arns}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.logoUri"></a>

```typescript
public readonly logoUri: string;
```

- *Type:* string

The logo URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#logo_uri ApiportalPortal#logo_uri}

---

##### `rumAppMonitorName`<sup>Optional</sup> <a name="rumAppMonitorName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.rumAppMonitorName"></a>

```typescript
public readonly rumAppMonitorName: string;
```

- *Type:* string

The name of the Amazon CloudWatch RUM app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#rum_app_monitor_name ApiportalPortal#rum_app_monitor_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApiportalPortalTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]

The tags associated with a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#tags ApiportalPortal#tags}

---

### ApiportalPortalEndpointConfiguration <a name="ApiportalPortalEndpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

const apiportalPortalEndpointConfiguration: apiportalPortal.ApiportalPortalEndpointConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.acmManaged">acmManaged</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | Represents a domain name and certificate for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.none">none</a></code> | <code>string</code> | Provide no authorization for your portal. This makes your portal publicly accessible on the web. |

---

##### `acmManaged`<sup>Optional</sup> <a name="acmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.acmManaged"></a>

```typescript
public readonly acmManaged: ApiportalPortalEndpointConfigurationAcmManaged;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

Represents a domain name and certificate for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#acm_managed ApiportalPortal#acm_managed}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.none"></a>

```typescript
public readonly none: string;
```

- *Type:* string

Provide no authorization for your portal. This makes your portal publicly accessible on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}

---

### ApiportalPortalEndpointConfigurationAcmManaged <a name="ApiportalPortalEndpointConfigurationAcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

const apiportalPortalEndpointConfigurationAcmManaged: apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.certificateArn">certificateArn</a></code> | <code>string</code> | The certificate ARN. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.domainName">domainName</a></code> | <code>string</code> | The domain name. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The certificate ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#certificate_arn ApiportalPortal#certificate_arn}

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#domain_name ApiportalPortal#domain_name}

---

### ApiportalPortalPortalContent <a name="ApiportalPortalPortalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

const apiportalPortalPortalContent: apiportalPortal.ApiportalPortalPortalContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.displayName">displayName</a></code> | <code>string</code> | The display name for the portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | Defines the theme for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.description">description</a></code> | <code>string</code> | A description of the portal. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#display_name ApiportalPortal#display_name}

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.theme"></a>

```typescript
public readonly theme: ApiportalPortalPortalContentTheme;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

Defines the theme for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#theme ApiportalPortal#theme}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#description ApiportalPortal#description}

---

### ApiportalPortalPortalContentTheme <a name="ApiportalPortalPortalContentTheme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

const apiportalPortalPortalContentTheme: apiportalPortal.ApiportalPortalPortalContentTheme = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.property.customColors">customColors</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | Represents custom colors for a published portal. |

---

##### `customColors`<sup>Required</sup> <a name="customColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.property.customColors"></a>

```typescript
public readonly customColors: ApiportalPortalPortalContentThemeCustomColors;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

Represents custom colors for a published portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#custom_colors ApiportalPortal#custom_colors}

---

### ApiportalPortalPortalContentThemeCustomColors <a name="ApiportalPortalPortalContentThemeCustomColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

const apiportalPortalPortalContentThemeCustomColors: apiportalPortal.ApiportalPortalPortalContentThemeCustomColors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.accentColor">accentColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#accent_color ApiportalPortal#accent_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#background_color ApiportalPortal#background_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.errorValidationColor">errorValidationColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#error_validation_color ApiportalPortal#error_validation_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.headerColor">headerColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#header_color ApiportalPortal#header_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.navigationColor">navigationColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#navigation_color ApiportalPortal#navigation_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.textColor">textColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#text_color ApiportalPortal#text_color}. |

---

##### `accentColor`<sup>Required</sup> <a name="accentColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.accentColor"></a>

```typescript
public readonly accentColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#accent_color ApiportalPortal#accent_color}.

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#background_color ApiportalPortal#background_color}.

---

##### `errorValidationColor`<sup>Required</sup> <a name="errorValidationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.errorValidationColor"></a>

```typescript
public readonly errorValidationColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#error_validation_color ApiportalPortal#error_validation_color}.

---

##### `headerColor`<sup>Required</sup> <a name="headerColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.headerColor"></a>

```typescript
public readonly headerColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#header_color ApiportalPortal#header_color}.

---

##### `navigationColor`<sup>Required</sup> <a name="navigationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.navigationColor"></a>

```typescript
public readonly navigationColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#navigation_color ApiportalPortal#navigation_color}.

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#text_color ApiportalPortal#text_color}.

---

### ApiportalPortalStatusException <a name="ApiportalPortalStatusException" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

const apiportalPortalStatusException: apiportalPortal.ApiportalPortalStatusException = { ... }
```


### ApiportalPortalTags <a name="ApiportalPortalTags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

const apiportalPortalTags: apiportalPortal.ApiportalPortalTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#key ApiportalPortal#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#value ApiportalPortal#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#key ApiportalPortal#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#value ApiportalPortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference <a name="ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetAppClientId">resetAppClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolArn">resetUserPoolArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolDomain">resetUserPoolDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppClientId` <a name="resetAppClientId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetAppClientId"></a>

```typescript
public resetAppClientId(): void
```

##### `resetUserPoolArn` <a name="resetUserPoolArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolArn"></a>

```typescript
public resetUserPoolArn(): void
```

##### `resetUserPoolDomain` <a name="resetUserPoolDomain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolDomain"></a>

```typescript
public resetUserPoolDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientIdInput">appClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArnInput">userPoolArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomainInput">userPoolDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId">appClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appClientIdInput`<sup>Optional</sup> <a name="appClientIdInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientIdInput"></a>

```typescript
public readonly appClientIdInput: string;
```

- *Type:* string

---

##### `userPoolArnInput`<sup>Optional</sup> <a name="userPoolArnInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArnInput"></a>

```typescript
public readonly userPoolArnInput: string;
```

- *Type:* string

---

##### `userPoolDomainInput`<sup>Optional</sup> <a name="userPoolDomainInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomainInput"></a>

```typescript
public readonly userPoolDomainInput: string;
```

- *Type:* string

---

##### `appClientId`<sup>Required</sup> <a name="appClientId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId"></a>

```typescript
public readonly appClientId: string;
```

- *Type:* string

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---


### ApiportalPortalAuthorizationAuthorizationConfigOutputReference <a name="ApiportalPortalAuthorizationAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig">putCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetCognitoConfig">resetCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetNone">resetNone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCognitoConfig` <a name="putCognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig"></a>

```typescript
public putCognitoConfig(value: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---

##### `resetCognitoConfig` <a name="resetCognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetCognitoConfig"></a>

```typescript
public resetCognitoConfig(): void
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetNone"></a>

```typescript
public resetNone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfigInput">cognitoConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.noneInput">noneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none">none</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cognitoConfig`<sup>Required</sup> <a name="cognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig"></a>

```typescript
public readonly cognitoConfig: ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a>

---

##### `cognitoConfigInput`<sup>Optional</sup> <a name="cognitoConfigInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfigInput"></a>

```typescript
public readonly cognitoConfigInput: IResolvable | ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.noneInput"></a>

```typescript
public readonly noneInput: string;
```

- *Type:* string

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none"></a>

```typescript
public readonly none: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalPortalAuthorizationAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

---


### ApiportalPortalAuthorizationOutputReference <a name="ApiportalPortalAuthorizationOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortalAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig"></a>

```typescript
public putAuthorizationConfig(value: ApiportalPortalAuthorizationAuthorizationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControlInput">fineGrainedAccessControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl">fineGrainedAccessControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: ApiportalPortalAuthorizationAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfigInput"></a>

```typescript
public readonly authorizationConfigInput: IResolvable | ApiportalPortalAuthorizationAuthorizationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

---

##### `fineGrainedAccessControlInput`<sup>Optional</sup> <a name="fineGrainedAccessControlInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControlInput"></a>

```typescript
public readonly fineGrainedAccessControlInput: string;
```

- *Type:* string

---

##### `fineGrainedAccessControl`<sup>Required</sup> <a name="fineGrainedAccessControl" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl"></a>

```typescript
public readonly fineGrainedAccessControl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalPortalAuthorization;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

---


### ApiportalPortalEndpointConfigurationAcmManagedOutputReference <a name="ApiportalPortalEndpointConfigurationAcmManagedOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetDomainName">resetDomainName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetDomainName"></a>

```typescript
public resetDomainName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalPortalEndpointConfigurationAcmManaged;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

---


### ApiportalPortalEndpointConfigurationOutputReference <a name="ApiportalPortalEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged">putAcmManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetAcmManaged">resetAcmManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetNone">resetNone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcmManaged` <a name="putAcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged"></a>

```typescript
public putAcmManaged(value: ApiportalPortalEndpointConfigurationAcmManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

---

##### `resetAcmManaged` <a name="resetAcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetAcmManaged"></a>

```typescript
public resetAcmManaged(): void
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetNone"></a>

```typescript
public resetNone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManaged">acmManaged</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference">ApiportalPortalEndpointConfigurationAcmManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName">portalDefaultDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId">portalDomainHostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManagedInput">acmManagedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.noneInput">noneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.none">none</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acmManaged`<sup>Required</sup> <a name="acmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManaged"></a>

```typescript
public readonly acmManaged: ApiportalPortalEndpointConfigurationAcmManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference">ApiportalPortalEndpointConfigurationAcmManagedOutputReference</a>

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `portalDefaultDomainName`<sup>Required</sup> <a name="portalDefaultDomainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName"></a>

```typescript
public readonly portalDefaultDomainName: string;
```

- *Type:* string

---

##### `portalDomainHostedZoneId`<sup>Required</sup> <a name="portalDomainHostedZoneId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId"></a>

```typescript
public readonly portalDomainHostedZoneId: string;
```

- *Type:* string

---

##### `acmManagedInput`<sup>Optional</sup> <a name="acmManagedInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManagedInput"></a>

```typescript
public readonly acmManagedInput: IResolvable | ApiportalPortalEndpointConfigurationAcmManaged;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.noneInput"></a>

```typescript
public readonly noneInput: string;
```

- *Type:* string

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.none"></a>

```typescript
public readonly none: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalPortalEndpointConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

---


### ApiportalPortalPortalContentOutputReference <a name="ApiportalPortalPortalContentOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortalPortalContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme">putTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTheme` <a name="putTheme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme"></a>

```typescript
public putTheme(value: ApiportalPortalPortalContentTheme): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference">ApiportalPortalPortalContentThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.themeInput">themeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.theme"></a>

```typescript
public readonly theme: ApiportalPortalPortalContentThemeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference">ApiportalPortalPortalContentThemeOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.themeInput"></a>

```typescript
public readonly themeInput: IResolvable | ApiportalPortalPortalContentTheme;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalPortalPortalContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

---


### ApiportalPortalPortalContentThemeCustomColorsOutputReference <a name="ApiportalPortalPortalContentThemeCustomColorsOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColorInput">accentColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColorInput">errorValidationColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColorInput">headerColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColorInput">navigationColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColorInput">textColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor">accentColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor">errorValidationColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor">headerColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor">navigationColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor">textColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accentColorInput`<sup>Optional</sup> <a name="accentColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColorInput"></a>

```typescript
public readonly accentColorInput: string;
```

- *Type:* string

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColorInput"></a>

```typescript
public readonly backgroundColorInput: string;
```

- *Type:* string

---

##### `errorValidationColorInput`<sup>Optional</sup> <a name="errorValidationColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColorInput"></a>

```typescript
public readonly errorValidationColorInput: string;
```

- *Type:* string

---

##### `headerColorInput`<sup>Optional</sup> <a name="headerColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColorInput"></a>

```typescript
public readonly headerColorInput: string;
```

- *Type:* string

---

##### `navigationColorInput`<sup>Optional</sup> <a name="navigationColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColorInput"></a>

```typescript
public readonly navigationColorInput: string;
```

- *Type:* string

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColorInput"></a>

```typescript
public readonly textColorInput: string;
```

- *Type:* string

---

##### `accentColor`<sup>Required</sup> <a name="accentColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor"></a>

```typescript
public readonly accentColor: string;
```

- *Type:* string

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

---

##### `errorValidationColor`<sup>Required</sup> <a name="errorValidationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor"></a>

```typescript
public readonly errorValidationColor: string;
```

- *Type:* string

---

##### `headerColor`<sup>Required</sup> <a name="headerColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor"></a>

```typescript
public readonly headerColor: string;
```

- *Type:* string

---

##### `navigationColor`<sup>Required</sup> <a name="navigationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor"></a>

```typescript
public readonly navigationColor: string;
```

- *Type:* string

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor"></a>

```typescript
public readonly textColor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalPortalPortalContentThemeCustomColors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

---


### ApiportalPortalPortalContentThemeOutputReference <a name="ApiportalPortalPortalContentThemeOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortalPortalContentThemeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors">putCustomColors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomColors` <a name="putCustomColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors"></a>

```typescript
public putCustomColors(value: ApiportalPortalPortalContentThemeCustomColors): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColors">customColors</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference">ApiportalPortalPortalContentThemeCustomColorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt">logoUploadedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColorsInput">customColorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customColors`<sup>Required</sup> <a name="customColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColors"></a>

```typescript
public readonly customColors: ApiportalPortalPortalContentThemeCustomColorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference">ApiportalPortalPortalContentThemeCustomColorsOutputReference</a>

---

##### `logoUploadedAt`<sup>Required</sup> <a name="logoUploadedAt" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt"></a>

```typescript
public readonly logoUploadedAt: string;
```

- *Type:* string

---

##### `customColorsInput`<sup>Optional</sup> <a name="customColorsInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColorsInput"></a>

```typescript
public readonly customColorsInput: IResolvable | ApiportalPortalPortalContentThemeCustomColors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalPortalPortalContentTheme;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

---


### ApiportalPortalStatusExceptionOutputReference <a name="ApiportalPortalStatusExceptionOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortalStatusExceptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.exception">exception</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException">ApiportalPortalStatusException</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exception`<sup>Required</sup> <a name="exception" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.exception"></a>

```typescript
public readonly exception: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiportalPortalStatusException;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException">ApiportalPortalStatusException</a>

---


### ApiportalPortalTagsList <a name="ApiportalPortalTagsList" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortalTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get"></a>

```typescript
public get(index: number): ApiportalPortalTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalPortalTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>[]

---


### ApiportalPortalTagsOutputReference <a name="ApiportalPortalTagsOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer"></a>

```typescript
import { apiportalPortal } from '@cdktn/provider-awscc'

new apiportalPortal.ApiportalPortalTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalPortalTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>

---



