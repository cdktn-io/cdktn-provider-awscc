# `sesVdmAttributes` Submodule <a name="`sesVdmAttributes` Submodule" id="@cdktn/provider-awscc.sesVdmAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesVdmAttributes <a name="SesVdmAttributes" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_vdm_attributes awscc_ses_vdm_attributes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.Initializer"></a>

```typescript
import { sesVdmAttributes } from '@cdktn/provider-awscc'

new sesVdmAttributes.SesVdmAttributes(scope: Construct, id: string, config?: SesVdmAttributesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig">SesVdmAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig">SesVdmAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.putDashboardAttributes">putDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.putGuardianAttributes">putGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.resetDashboardAttributes">resetDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.resetGuardianAttributes">resetGuardianAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDashboardAttributes` <a name="putDashboardAttributes" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.putDashboardAttributes"></a>

```typescript
public putDashboardAttributes(value: SesVdmAttributesDashboardAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.putDashboardAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributes">SesVdmAttributesDashboardAttributes</a>

---

##### `putGuardianAttributes` <a name="putGuardianAttributes" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.putGuardianAttributes"></a>

```typescript
public putGuardianAttributes(value: SesVdmAttributesGuardianAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.putGuardianAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributes">SesVdmAttributesGuardianAttributes</a>

---

##### `resetDashboardAttributes` <a name="resetDashboardAttributes" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.resetDashboardAttributes"></a>

```typescript
public resetDashboardAttributes(): void
```

##### `resetGuardianAttributes` <a name="resetGuardianAttributes" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.resetGuardianAttributes"></a>

```typescript
public resetGuardianAttributes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesVdmAttributes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.isConstruct"></a>

```typescript
import { sesVdmAttributes } from '@cdktn/provider-awscc'

sesVdmAttributes.SesVdmAttributes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.isTerraformElement"></a>

```typescript
import { sesVdmAttributes } from '@cdktn/provider-awscc'

sesVdmAttributes.SesVdmAttributes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.isTerraformResource"></a>

```typescript
import { sesVdmAttributes } from '@cdktn/provider-awscc'

sesVdmAttributes.SesVdmAttributes.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.generateConfigForImport"></a>

```typescript
import { sesVdmAttributes } from '@cdktn/provider-awscc'

sesVdmAttributes.SesVdmAttributes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SesVdmAttributes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesVdmAttributes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesVdmAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_vdm_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesVdmAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.dashboardAttributes">dashboardAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference">SesVdmAttributesDashboardAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.guardianAttributes">guardianAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference">SesVdmAttributesGuardianAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.vdmAttributesResourceId">vdmAttributesResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.dashboardAttributesInput">dashboardAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributes">SesVdmAttributesDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.guardianAttributesInput">guardianAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributes">SesVdmAttributesGuardianAttributes</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dashboardAttributes`<sup>Required</sup> <a name="dashboardAttributes" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.dashboardAttributes"></a>

```typescript
public readonly dashboardAttributes: SesVdmAttributesDashboardAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference">SesVdmAttributesDashboardAttributesOutputReference</a>

---

##### `guardianAttributes`<sup>Required</sup> <a name="guardianAttributes" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.guardianAttributes"></a>

```typescript
public readonly guardianAttributes: SesVdmAttributesGuardianAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference">SesVdmAttributesGuardianAttributesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vdmAttributesResourceId`<sup>Required</sup> <a name="vdmAttributesResourceId" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.vdmAttributesResourceId"></a>

```typescript
public readonly vdmAttributesResourceId: string;
```

- *Type:* string

---

##### `dashboardAttributesInput`<sup>Optional</sup> <a name="dashboardAttributesInput" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.dashboardAttributesInput"></a>

```typescript
public readonly dashboardAttributesInput: IResolvable | SesVdmAttributesDashboardAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributes">SesVdmAttributesDashboardAttributes</a>

---

##### `guardianAttributesInput`<sup>Optional</sup> <a name="guardianAttributesInput" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.guardianAttributesInput"></a>

```typescript
public readonly guardianAttributesInput: IResolvable | SesVdmAttributesGuardianAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributes">SesVdmAttributesGuardianAttributes</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesVdmAttributesConfig <a name="SesVdmAttributesConfig" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.Initializer"></a>

```typescript
import { sesVdmAttributes } from '@cdktn/provider-awscc'

const sesVdmAttributesConfig: sesVdmAttributes.SesVdmAttributesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.dashboardAttributes">dashboardAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributes">SesVdmAttributesDashboardAttributes</a></code> | Preferences regarding the Dashboard feature. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.guardianAttributes">guardianAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributes">SesVdmAttributesGuardianAttributes</a></code> | Preferences regarding the Guardian feature. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dashboardAttributes`<sup>Optional</sup> <a name="dashboardAttributes" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.dashboardAttributes"></a>

```typescript
public readonly dashboardAttributes: SesVdmAttributesDashboardAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributes">SesVdmAttributesDashboardAttributes</a>

Preferences regarding the Dashboard feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_vdm_attributes#dashboard_attributes SesVdmAttributes#dashboard_attributes}

---

##### `guardianAttributes`<sup>Optional</sup> <a name="guardianAttributes" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesConfig.property.guardianAttributes"></a>

```typescript
public readonly guardianAttributes: SesVdmAttributesGuardianAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributes">SesVdmAttributesGuardianAttributes</a>

Preferences regarding the Guardian feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_vdm_attributes#guardian_attributes SesVdmAttributes#guardian_attributes}

---

### SesVdmAttributesDashboardAttributes <a name="SesVdmAttributesDashboardAttributes" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributes.Initializer"></a>

```typescript
import { sesVdmAttributes } from '@cdktn/provider-awscc'

const sesVdmAttributesDashboardAttributes: sesVdmAttributes.SesVdmAttributesDashboardAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributes.property.engagementMetrics">engagementMetrics</a></code> | <code>string</code> | Whether emails sent from this account have engagement tracking enabled. |

---

##### `engagementMetrics`<sup>Optional</sup> <a name="engagementMetrics" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributes.property.engagementMetrics"></a>

```typescript
public readonly engagementMetrics: string;
```

- *Type:* string

Whether emails sent from this account have engagement tracking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_vdm_attributes#engagement_metrics SesVdmAttributes#engagement_metrics}

---

### SesVdmAttributesGuardianAttributes <a name="SesVdmAttributesGuardianAttributes" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributes.Initializer"></a>

```typescript
import { sesVdmAttributes } from '@cdktn/provider-awscc'

const sesVdmAttributesGuardianAttributes: sesVdmAttributes.SesVdmAttributesGuardianAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributes.property.optimizedSharedDelivery">optimizedSharedDelivery</a></code> | <code>string</code> | Whether emails sent from this account have optimized delivery algorithm enabled. |

---

##### `optimizedSharedDelivery`<sup>Optional</sup> <a name="optimizedSharedDelivery" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributes.property.optimizedSharedDelivery"></a>

```typescript
public readonly optimizedSharedDelivery: string;
```

- *Type:* string

Whether emails sent from this account have optimized delivery algorithm enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_vdm_attributes#optimized_shared_delivery SesVdmAttributes#optimized_shared_delivery}

---

## Classes <a name="Classes" id="Classes"></a>

### SesVdmAttributesDashboardAttributesOutputReference <a name="SesVdmAttributesDashboardAttributesOutputReference" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.Initializer"></a>

```typescript
import { sesVdmAttributes } from '@cdktn/provider-awscc'

new sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.resetEngagementMetrics">resetEngagementMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEngagementMetrics` <a name="resetEngagementMetrics" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.resetEngagementMetrics"></a>

```typescript
public resetEngagementMetrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.property.engagementMetricsInput">engagementMetricsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics">engagementMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributes">SesVdmAttributesDashboardAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engagementMetricsInput`<sup>Optional</sup> <a name="engagementMetricsInput" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.property.engagementMetricsInput"></a>

```typescript
public readonly engagementMetricsInput: string;
```

- *Type:* string

---

##### `engagementMetrics`<sup>Required</sup> <a name="engagementMetrics" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics"></a>

```typescript
public readonly engagementMetrics: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesVdmAttributesDashboardAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesDashboardAttributes">SesVdmAttributesDashboardAttributes</a>

---


### SesVdmAttributesGuardianAttributesOutputReference <a name="SesVdmAttributesGuardianAttributesOutputReference" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.Initializer"></a>

```typescript
import { sesVdmAttributes } from '@cdktn/provider-awscc'

new sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.resetOptimizedSharedDelivery">resetOptimizedSharedDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptimizedSharedDelivery` <a name="resetOptimizedSharedDelivery" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.resetOptimizedSharedDelivery"></a>

```typescript
public resetOptimizedSharedDelivery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDeliveryInput">optimizedSharedDeliveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery">optimizedSharedDelivery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributes">SesVdmAttributesGuardianAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optimizedSharedDeliveryInput`<sup>Optional</sup> <a name="optimizedSharedDeliveryInput" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDeliveryInput"></a>

```typescript
public readonly optimizedSharedDeliveryInput: string;
```

- *Type:* string

---

##### `optimizedSharedDelivery`<sup>Required</sup> <a name="optimizedSharedDelivery" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery"></a>

```typescript
public readonly optimizedSharedDelivery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesVdmAttributesGuardianAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesVdmAttributes.SesVdmAttributesGuardianAttributes">SesVdmAttributesGuardianAttributes</a>

---



