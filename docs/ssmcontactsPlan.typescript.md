# `ssmcontactsPlan` Submodule <a name="`ssmcontactsPlan` Submodule" id="@cdktn/provider-awscc.ssmcontactsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsPlan <a name="SsmcontactsPlan" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan awscc_ssmcontacts_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

new ssmcontactsPlan.SsmcontactsPlan(scope: Construct, id: string, config?: SsmcontactsPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig">SsmcontactsPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig">SsmcontactsPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetContactId">resetContactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetRotationIds">resetRotationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetStages">resetStages</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStages` <a name="putStages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages"></a>

```typescript
public putStages(value: IResolvable | SsmcontactsPlanStages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>[]

---

##### `resetContactId` <a name="resetContactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetContactId"></a>

```typescript
public resetContactId(): void
```

##### `resetRotationIds` <a name="resetRotationIds" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetRotationIds"></a>

```typescript
public resetRotationIds(): void
```

##### `resetStages` <a name="resetStages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetStages"></a>

```typescript
public resetStages(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmcontactsPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

ssmcontactsPlan.SsmcontactsPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

ssmcontactsPlan.SsmcontactsPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

ssmcontactsPlan.SsmcontactsPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsmcontactsPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmcontactsPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmcontactsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList">SsmcontactsPlanStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput">contactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIdsInput">rotationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stagesInput">stagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactId">contactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIds">rotationIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stages"></a>

```typescript
public readonly stages: SsmcontactsPlanStagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList">SsmcontactsPlanStagesList</a>

---

##### `contactIdInput`<sup>Optional</sup> <a name="contactIdInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput"></a>

```typescript
public readonly contactIdInput: string;
```

- *Type:* string

---

##### `rotationIdsInput`<sup>Optional</sup> <a name="rotationIdsInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIdsInput"></a>

```typescript
public readonly rotationIdsInput: string[];
```

- *Type:* string[]

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stagesInput"></a>

```typescript
public readonly stagesInput: IResolvable | SsmcontactsPlanStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>[]

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactId"></a>

```typescript
public readonly contactId: string;
```

- *Type:* string

---

##### `rotationIds`<sup>Required</sup> <a name="rotationIds" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIds"></a>

```typescript
public readonly rotationIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsPlanConfig <a name="SsmcontactsPlanConfig" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

const ssmcontactsPlanConfig: ssmcontactsPlan.SsmcontactsPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId">contactId</a></code> | <code>string</code> | Contact ID for the AWS SSM Incident Manager Contact to associate the plan. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.rotationIds">rotationIds</a></code> | <code>string[]</code> | Rotation Ids to associate with Oncall Contact for engagement. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.stages">stages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>[]</code> | The stages that an escalation plan or engagement plan engages contacts and contact methods in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `contactId`<sup>Optional</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId"></a>

```typescript
public readonly contactId: string;
```

- *Type:* string

Contact ID for the AWS SSM Incident Manager Contact to associate the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}

---

##### `rotationIds`<sup>Optional</sup> <a name="rotationIds" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.rotationIds"></a>

```typescript
public readonly rotationIds: string[];
```

- *Type:* string[]

Rotation Ids to associate with Oncall Contact for engagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#rotation_ids SsmcontactsPlan#rotation_ids}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.stages"></a>

```typescript
public readonly stages: IResolvable | SsmcontactsPlanStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>[]

The stages that an escalation plan or engagement plan engages contacts and contact methods in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#stages SsmcontactsPlan#stages}

---

### SsmcontactsPlanStages <a name="SsmcontactsPlanStages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

const ssmcontactsPlanStages: ssmcontactsPlan.SsmcontactsPlanStages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | The time to wait until beginning the next stage. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.targets">targets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>[]</code> | The contacts or contact methods that the escalation plan or engagement plan is engaging. |

---

##### `durationInMinutes`<sup>Optional</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

The time to wait until beginning the next stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.targets"></a>

```typescript
public readonly targets: IResolvable | SsmcontactsPlanStagesTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>[]

The contacts or contact methods that the escalation plan or engagement plan is engaging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#targets SsmcontactsPlan#targets}

---

### SsmcontactsPlanStagesTargets <a name="SsmcontactsPlanStagesTargets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

const ssmcontactsPlanStagesTargets: ssmcontactsPlan.SsmcontactsPlanStagesTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.channelTargetInfo">channelTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a></code> | Information about the contact channel that SSM Incident Manager uses to engage the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.contactTargetInfo">contactTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a></code> | The contact that SSM Incident Manager is engaging during an incident. |

---

##### `channelTargetInfo`<sup>Optional</sup> <a name="channelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.channelTargetInfo"></a>

```typescript
public readonly channelTargetInfo: SsmcontactsPlanStagesTargetsChannelTargetInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

Information about the contact channel that SSM Incident Manager uses to engage the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#channel_target_info SsmcontactsPlan#channel_target_info}

---

##### `contactTargetInfo`<sup>Optional</sup> <a name="contactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.contactTargetInfo"></a>

```typescript
public readonly contactTargetInfo: SsmcontactsPlanStagesTargetsContactTargetInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

The contact that SSM Incident Manager is engaging during an incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#contact_target_info SsmcontactsPlan#contact_target_info}

---

### SsmcontactsPlanStagesTargetsChannelTargetInfo <a name="SsmcontactsPlanStagesTargetsChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

const ssmcontactsPlanStagesTargetsChannelTargetInfo: ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.channelId">channelId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.retryIntervalInMinutes">retryIntervalInMinutes</a></code> | <code>number</code> | The number of minutes to wait to retry sending engagement in the case the engagement initially fails. |

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#channel_id SsmcontactsPlan#channel_id}

---

##### `retryIntervalInMinutes`<sup>Optional</sup> <a name="retryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.retryIntervalInMinutes"></a>

```typescript
public readonly retryIntervalInMinutes: number;
```

- *Type:* number

The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}

---

### SsmcontactsPlanStagesTargetsContactTargetInfo <a name="SsmcontactsPlanStagesTargetsContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

const ssmcontactsPlanStagesTargetsContactTargetInfo: ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.contactId">contactId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.isEssential">isEssential</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan. |

---

##### `contactId`<sup>Optional</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.contactId"></a>

```typescript
public readonly contactId: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}

---

##### `isEssential`<sup>Optional</sup> <a name="isEssential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.isEssential"></a>

```typescript
public readonly isEssential: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsPlanStagesList <a name="SsmcontactsPlanStagesList" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

new ssmcontactsPlan.SsmcontactsPlanStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get"></a>

```typescript
public get(index: number): SsmcontactsPlanStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsPlanStages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>[]

---


### SsmcontactsPlanStagesOutputReference <a name="SsmcontactsPlanStagesOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

new ssmcontactsPlan.SsmcontactsPlanStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetDurationInMinutes">resetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets"></a>

```typescript
public putTargets(value: IResolvable | SsmcontactsPlanStagesTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>[]

---

##### `resetDurationInMinutes` <a name="resetDurationInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetDurationInMinutes"></a>

```typescript
public resetDurationInMinutes(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetTargets"></a>

```typescript
public resetTargets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList">SsmcontactsPlanStagesTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutesInput">durationInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targetsInput">targetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targets"></a>

```typescript
public readonly targets: SsmcontactsPlanStagesTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList">SsmcontactsPlanStagesTargetsList</a>

---

##### `durationInMinutesInput`<sup>Optional</sup> <a name="durationInMinutesInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutesInput"></a>

```typescript
public readonly durationInMinutesInput: number;
```

- *Type:* number

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | SsmcontactsPlanStagesTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>[]

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsPlanStages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>

---


### SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference <a name="SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

new ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes">resetRetryIntervalInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelId` <a name="resetChannelId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetChannelId"></a>

```typescript
public resetChannelId(): void
```

##### `resetRetryIntervalInMinutes` <a name="resetRetryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes"></a>

```typescript
public resetRetryIntervalInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput">retryIntervalInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes">retryIntervalInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `retryIntervalInMinutesInput`<sup>Optional</sup> <a name="retryIntervalInMinutesInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput"></a>

```typescript
public readonly retryIntervalInMinutesInput: number;
```

- *Type:* number

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `retryIntervalInMinutes`<sup>Required</sup> <a name="retryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```typescript
public readonly retryIntervalInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsPlanStagesTargetsChannelTargetInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

---


### SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference <a name="SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

new ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetContactId">resetContactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetIsEssential">resetIsEssential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactId` <a name="resetContactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetContactId"></a>

```typescript
public resetContactId(): void
```

##### `resetIsEssential` <a name="resetIsEssential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetIsEssential"></a>

```typescript
public resetIsEssential(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactIdInput">contactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssentialInput">isEssentialInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactId">contactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssential">isEssential</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactIdInput`<sup>Optional</sup> <a name="contactIdInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactIdInput"></a>

```typescript
public readonly contactIdInput: string;
```

- *Type:* string

---

##### `isEssentialInput`<sup>Optional</sup> <a name="isEssentialInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssentialInput"></a>

```typescript
public readonly isEssentialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactId"></a>

```typescript
public readonly contactId: string;
```

- *Type:* string

---

##### `isEssential`<sup>Required</sup> <a name="isEssential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssential"></a>

```typescript
public readonly isEssential: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsPlanStagesTargetsContactTargetInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

---


### SsmcontactsPlanStagesTargetsList <a name="SsmcontactsPlanStagesTargetsList" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

new ssmcontactsPlan.SsmcontactsPlanStagesTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get"></a>

```typescript
public get(index: number): SsmcontactsPlanStagesTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsPlanStagesTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>[]

---


### SsmcontactsPlanStagesTargetsOutputReference <a name="SsmcontactsPlanStagesTargetsOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer"></a>

```typescript
import { ssmcontactsPlan } from '@cdktn/provider-awscc'

new ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo">putChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo">putContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetChannelTargetInfo">resetChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetContactTargetInfo">resetContactTargetInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChannelTargetInfo` <a name="putChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo"></a>

```typescript
public putChannelTargetInfo(value: SsmcontactsPlanStagesTargetsChannelTargetInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

---

##### `putContactTargetInfo` <a name="putContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo"></a>

```typescript
public putContactTargetInfo(value: SsmcontactsPlanStagesTargetsContactTargetInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

---

##### `resetChannelTargetInfo` <a name="resetChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetChannelTargetInfo"></a>

```typescript
public resetChannelTargetInfo(): void
```

##### `resetContactTargetInfo` <a name="resetContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetContactTargetInfo"></a>

```typescript
public resetContactTargetInfo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfo">channelTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference">SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfo">contactTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference">SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfoInput">channelTargetInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfoInput">contactTargetInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelTargetInfo`<sup>Required</sup> <a name="channelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfo"></a>

```typescript
public readonly channelTargetInfo: SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference">SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference</a>

---

##### `contactTargetInfo`<sup>Required</sup> <a name="contactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfo"></a>

```typescript
public readonly contactTargetInfo: SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference">SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference</a>

---

##### `channelTargetInfoInput`<sup>Optional</sup> <a name="channelTargetInfoInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfoInput"></a>

```typescript
public readonly channelTargetInfoInput: IResolvable | SsmcontactsPlanStagesTargetsChannelTargetInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

---

##### `contactTargetInfoInput`<sup>Optional</sup> <a name="contactTargetInfoInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfoInput"></a>

```typescript
public readonly contactTargetInfoInput: IResolvable | SsmcontactsPlanStagesTargetsContactTargetInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsPlanStagesTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>

---



