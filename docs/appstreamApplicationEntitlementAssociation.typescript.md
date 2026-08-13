# `appstreamApplicationEntitlementAssociation` Submodule <a name="`appstreamApplicationEntitlementAssociation` Submodule" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamApplicationEntitlementAssociation <a name="AppstreamApplicationEntitlementAssociation" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application_entitlement_association awscc_appstream_application_entitlement_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.Initializer"></a>

```typescript
import { appstreamApplicationEntitlementAssociation } from '@cdktn/provider-awscc'

new appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation(scope: Construct, id: string, config: AppstreamApplicationEntitlementAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig">AppstreamApplicationEntitlementAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig">AppstreamApplicationEntitlementAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamApplicationEntitlementAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isConstruct"></a>

```typescript
import { appstreamApplicationEntitlementAssociation } from '@cdktn/provider-awscc'

appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isTerraformElement"></a>

```typescript
import { appstreamApplicationEntitlementAssociation } from '@cdktn/provider-awscc'

appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isTerraformResource"></a>

```typescript
import { appstreamApplicationEntitlementAssociation } from '@cdktn/provider-awscc'

appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.generateConfigForImport"></a>

```typescript
import { appstreamApplicationEntitlementAssociation } from '@cdktn/provider-awscc'

appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppstreamApplicationEntitlementAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamApplicationEntitlementAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamApplicationEntitlementAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application_entitlement_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamApplicationEntitlementAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.applicationIdentifierInput">applicationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.entitlementNameInput">entitlementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.stackNameInput">stackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.applicationIdentifier">applicationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.entitlementName">entitlementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.stackName">stackName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `applicationIdentifierInput`<sup>Optional</sup> <a name="applicationIdentifierInput" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.applicationIdentifierInput"></a>

```typescript
public readonly applicationIdentifierInput: string;
```

- *Type:* string

---

##### `entitlementNameInput`<sup>Optional</sup> <a name="entitlementNameInput" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.entitlementNameInput"></a>

```typescript
public readonly entitlementNameInput: string;
```

- *Type:* string

---

##### `stackNameInput`<sup>Optional</sup> <a name="stackNameInput" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.stackNameInput"></a>

```typescript
public readonly stackNameInput: string;
```

- *Type:* string

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.applicationIdentifier"></a>

```typescript
public readonly applicationIdentifier: string;
```

- *Type:* string

---

##### `entitlementName`<sup>Required</sup> <a name="entitlementName" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.entitlementName"></a>

```typescript
public readonly entitlementName: string;
```

- *Type:* string

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamApplicationEntitlementAssociationConfig <a name="AppstreamApplicationEntitlementAssociationConfig" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.Initializer"></a>

```typescript
import { appstreamApplicationEntitlementAssociation } from '@cdktn/provider-awscc'

const appstreamApplicationEntitlementAssociationConfig: appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.applicationIdentifier">applicationIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application_entitlement_association#application_identifier AppstreamApplicationEntitlementAssociation#application_identifier}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.entitlementName">entitlementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application_entitlement_association#entitlement_name AppstreamApplicationEntitlementAssociation#entitlement_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.stackName">stackName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application_entitlement_association#stack_name AppstreamApplicationEntitlementAssociation#stack_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.applicationIdentifier"></a>

```typescript
public readonly applicationIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application_entitlement_association#application_identifier AppstreamApplicationEntitlementAssociation#application_identifier}.

---

##### `entitlementName`<sup>Required</sup> <a name="entitlementName" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.entitlementName"></a>

```typescript
public readonly entitlementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application_entitlement_association#entitlement_name AppstreamApplicationEntitlementAssociation#entitlement_name}.

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-awscc.appstreamApplicationEntitlementAssociation.AppstreamApplicationEntitlementAssociationConfig.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_application_entitlement_association#stack_name AppstreamApplicationEntitlementAssociation#stack_name}.

---



